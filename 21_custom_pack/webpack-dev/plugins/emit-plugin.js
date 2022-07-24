

class EmitPlugin{
  constructor(config){
       this.config=config
  }
  apply(compiler){
     console.log('我是'+this.config.name)
     compiler.hooks.emit.tap('emit',()=>{
      console.log('文件准备发射')
     })
  }
}

module.exports= EmitPlugin