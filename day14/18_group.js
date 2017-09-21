require("./getDB")().then(db=>{
  var emps=db.collection("emps");
  emps.group(["address.city"],
    {},
    {count:0},
    function(obj,prev){ prev.count++;},
    true
  ).then(count=>{
    console.log(count);
    db.close();
  }).catch(err=>{
    console.log(err);
    db.close();
  })
})