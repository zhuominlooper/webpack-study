//采用回调函数的方式实现异步串行执行任务，上一次函数的执行结果会传给下个函数， 等到所有异步任务实现之后返回
//异步串行：每个异步函数的执行必须等待上一个函数执行完成

class AsyncSeriesWaterfallPromiseHook {
  constructor() {
    this.tasks = [];
  }
  tapPromise(name, callback) {
    this.tasks.push(callback);
  }
  callPromise(...args) {
    return new Promise((resolve, reject) => {
      let index = 0;
      let fun = (data) => {
        this.tasks[index](data).then((res) => {
          if (++index === this.tasks.length) {
            return resolve(res);
          }
          fun(res);
        });
      };
      fun(...args);
    });
  }
}
let asyncHook = new AsyncSeriesWaterfallPromiseHook();

asyncHook.tapPromise("looper", (res) => {
  return new Promise((resolve, reject) => {
    console.log("looper", res);
    resolve("looper");
  });
});
asyncHook.tapPromise("zhuo", (res) => {
  return new Promise((resolve, reject) => {
    console.log("zhuo", res);
    resolve("zhuo");
  });
});

asyncHook
  .callPromise([1, 2, 3, 4])
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
