//同步执行所有任务，串行执行

class SyncHook{
  constructor(){
   this.tasks=[]
  }
  tap(name,callback){
    this.tasks.push(callback)
  }
  //串行执行
  call(...args){
    this.tasks.forEach(task=>{
      task(...args)
    })
  }
}
let syncHook=new SyncHook()
syncHook.tap('looper',(res)=>{
  console.log('looper',res)
})
syncHook.tap("zhuo", (res) => {
  console.log("zhuo", res);
});

syncHook.call([1,2,3])