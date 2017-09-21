require("./getDB")().then(db=>{
  var tasks=db.collection("tasks");
  tasks.find({state:"READY"}).sort({priority:-1})
    .next()
    .then(task=>{
      console.log("查询完成:");
      console.log(task);
      return new Promise(resolve=>{
        setTimeout(()=>{
          task.state="DONE";
          tasks.updateOne({_id:task._id},task)
            .then(()=>resolve(task._id));
        },5000);
      })
    })
    .then(task_id=>{
      console.log("更新完成");
      return tasks.findOne({_id:task_id});
    })
    .then(task=>{
      console.log(task);
      db.close();
    })
    .catch(err=> {
      console.log(err)
      db.close();
    })
})