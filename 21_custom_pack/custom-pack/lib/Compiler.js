let path = require("path");
let fs = require("fs");
let ejs=require('ejs')
let {SyncHook}=require('tapable')
let babylon = require("babylon");
let t = require("@babel/types");
let traverse = require("@babel/traverse").default;
let generator = require("@babel/generator").default;

class Compiler {
  constructor(config) {
    //保存全局配置
    this.config = config;
    //入口文件路径
    this.entryId; // ./src/index.js
    //保存所有文件依赖
    this.modules = {};

    this.entry = config.entry;
    //工作运行路径
    this.root = process.cwd();
    this.hooks = {
      entryOption: new SyncHook(),
      compiler: new SyncHook(),
      aferCompiler: new SyncHook(),
      afterPlugins: new SyncHook(),
      run: new SyncHook(),
      emit: new SyncHook(),
      done:new SyncHook()
    };

    //如果传递了plugins参数,先获取参数
    let plugins=this.config.plugins
    if(Array.isArray(plugins)){
      //利用syncHook的发布订阅模式，先进行事件的发布
      plugins.forEach(plugin=>{
        plugin.apply(this)//传入配置实例
      })
    }
  }
  //解析返回依赖列表
  parse(source, parentPath) {
    //ast解析语法树
    let ast = babylon.parse(source);

    let dependencies = [];
    traverse(ast, {
      CallExpression(p) {
        let node = p.node;
        if (node.callee.name === "require") {
          node.callee.name = '__webpack_require__';
          let moduleName = node.arguments[0].value;
          moduleName = moduleName + (path.extname(moduleName) ? "" : ".js");
          moduleName = "./" + path.join(parentPath, moduleName);
          dependencies.push(moduleName);
          node.arguments = [t.stringLiteral(moduleName)];
        }
      },
    });
    let sourceCode = generator(ast).code;

    return {
      sourceCode,
      dependencies,
    };
  }

  //获取源码
  getSource(modulePath) {
    let content = fs.readFileSync(modulePath, "utf8");
    //拿到每个loader的规则
    let rules = this.config.module.rules;
       rules.forEach((rule,index)=>{
         let {test,use}=rule
         let len=use.length-1
         if(test.test(modulePath)){//匹配后缀名称
              function normalLoader(){
                let loader=require(use[len--])  //取出loader函数
                content = loader(content)
                if(len>=0){
                  normalLoader();
                }
              }
              normalLoader()
         }
       })
    return content;
  }
  //构建模块
  buildModule(modulePath, isEntry) {
    //拿到源码
    let source = this.getSource(modulePath);
    //构建模块id 类似于"./src/a.js"
    let moduleName = "./" + path.relative(this.root, modulePath);
    if (isEntry) {
      this.entryId = moduleName; //保存入口名字
    }

    //path.dirname(moduleName)相当于取出 ./src
    //把源文件进行改造，返回依赖列表
    //this.parse(source, path.dirname(moduleName));
    let { sourceCode, dependencies } = this.parse(
      source,
      path.dirname(moduleName)
    );
   //把相对路径和模块内容对应起来
   console.log(sourceCode, dependencies);
   this.modules[moduleName]=sourceCode

   //递归解析，产生依赖
   dependencies.forEach(dep=>{
    this.buildModule(path.join(this.root,dep), false);
   })
  }
  emitFile() {

    //调用plugin的钩子函数
     this.hooks.emit.call()

    //用依赖关系输出文件
     let outPath=path.join(this.config.output.path,this.config.output.filename)
     let templateStr=this.getSource(path.join(__dirname,'build.ejs'))
     let outputCode = ejs.render(templateStr,{entryId:this.entryId,modules:this.modules});
     this.assets={}
     this.assets[outPath] = outputCode;
     fs.writeFileSync(outPath, outputCode);
    //  Object.keys(this.assets).forEach(key=>{
    //   fs.writeFileSync(key, this.assets[key]);
    //  })
  }
  run() {
    //创建依赖关系
    this.buildModule(path.resolve(this.root, this.entry), true); //true表示主模块

    //发射一个文件
    this.emitFile();
  }
}

module.exports = Compiler;
