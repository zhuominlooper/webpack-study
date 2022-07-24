//同步执行所有任务，当遇到有返回值不为null时候，就不往下执行(加锁的hook)

class SyncBailHook {
  constructor() {
    this.tasks = [];
  }
  tap(name, callback) {
    this.tasks.push(callback);
  }
  //串行执行
  call(...args) {
    let result;
    let index=0
    do {
      result = this.tasks[index++](...args);
    } while (!result&&index<this.tasks.length);
  }
}
let syncHook = new SyncBailHook();
syncHook.tap("looper", (res) => {
  console.log("looper", res);
  return '不往下执行'
});
syncHook.tap("zhuo", (res) => {
  console.log("zhuo", res);
});

syncHook.call([1, 2, 3]);