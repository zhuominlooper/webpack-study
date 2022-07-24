//同步执行所有任务,下一个函数的入参是上一个函数的出参

class SyncWaterfallHook {
  constructor() {
    this.tasks = [];
  }
  tap(name, callback) {
    this.tasks.push(callback);
  }
  //串行执行
  call(...args) {
    this.tasks.reduce((pre,next)=>{
       return next(pre)  
    },...args)
  }
}
let syncHook = new SyncWaterfallHook();
syncHook.tap("looper", (res) => {
  console.log("looper", res);
  return "第一个";
});
syncHook.tap("zhuo", (res) => {
  console.log("zhuo", res);
    return "第二个";
});
syncHook.tap("min", (res) => {
  console.log("min", res);
  return "第三个";
});

syncHook.call([1, 2, 3]);
