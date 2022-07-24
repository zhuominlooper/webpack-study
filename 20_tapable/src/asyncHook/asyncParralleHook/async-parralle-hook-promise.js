//采用promise的方式实现异步执行任务，等到所有异步任务实现之后返回

class AsyncParrallePromiseHook {
  constructor() {
    this.tasks = [];
  }
  tapPromise(name, callback) {
    this.tasks.push(callback);
  }
  callPromise(...args) {
    let promisePool = this.tasks.map((task) => task(...args)); //拿到所有的promise组成数组
    return Promise.all(promisePool);//在调用promise all处理
  }
}
let asyncHook = new AsyncParrallePromiseHook();

asyncHook.tapPromise("looper", (res) => {
  return new Promise((resolve, reject) => {
    console.log("looper", res);
    resolve('looper');
  });
});
asyncHook.tapPromise("zhuo", (res) => {
  return new Promise((resolve, reject) => {
    console.log("zhuo", res);
    resolve('zhuo');
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
