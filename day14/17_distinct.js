require("./getDB")().then(db=>{
  var col=db.collection("emps");
  col.distinct("address.city")
    .then(result=>{
    console.log(result);
    db.close();
  }).catch(err=>{
    console.log(err);
    db.close();
  });
})