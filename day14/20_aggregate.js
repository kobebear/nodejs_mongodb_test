require("./getDB")().then(db=>{
  var coll=db.collection("emps");
  coll.aggregate([
    {$project:{"address.city":1}},
    {$group:{_id:"$address.city",count:{$sum:1}}},
    {$sort:{count:-1}},
    {$limit:5}
  ]).toArray().then(result=> {
    console.log(result);
    db.close();
  }).catch(err=>{
    console.log(err);
    db.close();
  })
})