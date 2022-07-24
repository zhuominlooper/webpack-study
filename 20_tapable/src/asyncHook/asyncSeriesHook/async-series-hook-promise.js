//采用promise方式实现异步串行执行任务，等到所有异步任务实现之后返回
//异步串行：每个异步函数的执行必须等待上一个函数执行完成

class AsyncSeriesPromiseHook {
  constructor() {
    this.tasks = [];
  }
  tapPromise(name, callback) {
    this.tasks.push(callback);
  }
  callPromise(...args) {
    let [first, ...other] = this.tasks;
    return other.reduce((pre, next) => {
      return pre.then(() => next(...args));
    }, first(...args));
  }
}
let asyncHook = new AsyncSeriesPromiseHook();

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
  .callPromise([1, 2, 3])
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
