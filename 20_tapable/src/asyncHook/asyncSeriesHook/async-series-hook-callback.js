//采用回调函数的方式实现异步串行执行任务，等到所有异步任务实现之后返回
//异步串行：每个异步函数的执行必须等待上一个函数执行完成

class AsyncSeriesCallbackHook {
  constructor() {
    this.tasks = [];
  }
  tapAsync(name, callback) {
    this.tasks.push(callback);
  }
  callAsync(...args) { //采用express的中间件原理(next串行执行)
   let finalFun=args.pop() //取出回调函数
   let count=0;

   let next=()=>{
      if(count>=this.tasks.length){
        return finalFun()
      }
    this.tasks[count++](...args,next) //递归执行
   }
   next()
  }
}
let asyncHook = new AsyncSeriesCallbackHook();

asyncHook.tapAsync("looper", (res, cb) => {
  setTimeout(() => {
    console.log("looper", res);
    cb();
  }, 1000);
});
asyncHook.tapAsync("zhuo", (res, cb) => {
  setTimeout(() => {
    console.log("zhuo", res);
    cb();
  }, 500);
});

asyncHook.callAsync([1, 2, 3], () => {
  console.log("执行完成");
});
