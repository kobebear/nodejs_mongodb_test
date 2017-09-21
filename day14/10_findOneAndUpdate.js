require("./getDB")().then(db=>{
  var tasks=db.collection("tasks");
  tasks.findOneAndUpdate(
    {state:"READY"},
    {$set:{state:"DONE"}},
    {sort:{priority:-1},returnOriginal:false}
  ).then(task=>{
    console.log(task);
    db.close();
  })
  .catch(err=> {
    console.log(err)
    db.close();
  })
})