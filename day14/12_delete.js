require("./getDB")().then(db=>{
  var tasks=db.collection("tasks");
  tasks.find().toArray()
    .then(arr=>{
      console.log("删除前的集合: ");
      for(var task of arr){
        console.log(task);
      }
      return tasks.deleteOne({taskId:2},{w:1,j:true});
    }).then(result=>{
      console.log("删除id为2的任务后: ");
      return tasks.find().toArray();
    }).then(arr=>{
      for(var task of arr){
        console.log(task);
      }
      return tasks.deleteMany({state:"DONE"},{w:1,j:true});
    }).then(result=>{
      console.log("删除state为DONE的任务后: ");
      return tasks.find().toArray();
    }).then(arr=>{
      for(var task of arr){
        console.log(task);
      }
      return tasks.findOneAndDelete(
        {state:"READY"},{sort:{priority:-1}});
    }).then(result=>{
      console.log("删除state为DONE的任务后: ");
      return tasks.find().toArray();
    }).then(arr=>{
      for(var task of arr){
        console.log(task);
      }
      db.close();
    }).catch(err=>{
      console.log(err);
      db.close();
    })
})