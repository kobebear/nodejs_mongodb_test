require("./getDB")().then(db=>{
  var tasks=db.collection("tasks");
  tasks.find({},
    //{fields:{taskId:1,state:1,_id:0}}
    //{fields:{_id:0},sort:{priority:-1,state:1}}
    //{fields:{_id:0},sort:{priority:-1,state:1},limit:2}
    {fields:{_id:0},sort:{priority:-1,state:1},limit:2,skip:2}
  ).toArray()
    .then(items=> {
      console.dir(items);
      db.close();
    })
    .catch(err=>{
      console.log(err);
      db.close()
    });
})