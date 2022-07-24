//采用回调函数的方式实现异步串行执行任务，上一次函数的执行结果会传给下个函数， 等到所有异步任务实现之后返回
//异步串行：每个异步函数的执行必须等待上一个函数执行完成

class AsyncSeriesWaterfallCallbackHook {
  constructor() {
    this.tasks = [];
  }
  tapAsync(name, callback) {
    this.tasks.push(callback);
  }

  callAsync(...args) {
    let finalFun = args.pop(); //取出最后一个回调函数
    let index = 0;
    let next = (err, data) => {
      if (err) {
        return;
      } //如果出现错误，直接中断
      let task = this.tasks[index++];
      if (!task) {
        //说明回调函数执行完成
        return finalFun();
      }
      task(data, next);
    };
    next(null, ...args);
  }
}
let asyncHook = new AsyncSeriesWaterfallCallbackHook();

asyncHook.tapAsync("looper", (res, cb) => {
  setTimeout(() => {
    console.log("looper", res);
    cb('error', "第一个执行完成");
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
