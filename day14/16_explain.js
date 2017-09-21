require("./getDB")().then(db=>{
  var exam=db.collection("exam");
  exam.find(
    {score:{$gte:60,$lte:80}},
    {explain:true,sort:{sname:1},limit:100}
  ).toArray()
    .then(result=>{
      console.log(result);
      db.close();
    })
    .catch(err=> {
      console.log(err)
      db.close();
    })
})