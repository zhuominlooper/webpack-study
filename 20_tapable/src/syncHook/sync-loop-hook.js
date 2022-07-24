//同步执行所有任务,每个任务可以执行一定的次数再往下执行

class SyncLoopHook {
  constructor() {
    this.tasks = [];
  }
  tap(name, callback) {
    this.tasks.push(callback);
  }
  //串行执行
  call(...args) {
    this.tasks.forEach(task=>{
      let result
      do {
        result = task(...args);
      } while (result!=undefined);
    })
  }
}
let syncHook = new SyncLoopHook();
let count=0
syncHook.tap("looper", (res) => {
  console.log("looper", res);
  return ++count === 3 ? undefined : "继续执行";
});
syncHook.tap("zhuo", (res) => {
  console.log("zhuo", res);
});
syncHook.tap("min", (res) => {
  console.log("min", res);
});

syncHook.call([1, 2, 3]);
