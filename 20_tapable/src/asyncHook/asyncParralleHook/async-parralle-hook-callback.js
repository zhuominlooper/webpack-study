//采用回调函数的方式实现异步执行任务，等到所有异步任务实现之后返回

class AsyncParralleCallbackHook {
  constructor() {
    this.tasks = [];
  }
  tapAsync(name, callback) {
    this.tasks.push(callback);
  }
  callAsync(...args) {
    let count = 0;
    let finalFun = args.pop(); //获取回调函数
    let excuter = () => {
      count++;
      if (count === this.tasks.length) {
        finalFun();
      }
    };
    
    this.tasks.forEach((task) => {
      task(...args, excuter);
    });
  }
}
let asyncHook = new AsyncParralleCallbackHook();

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
