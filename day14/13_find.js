require("./getDB")().then(db=>{
  //var products=db.collection("products");
  //products.find(
    //{createdDate:{$lt:new Date("2016/01/01 00:00")}}
    //{createdDate:{$gt:new Date("2016/01/01 00:00")}}
    //{count:{$gte:50,$lte:80}}
    //{$or:[{count:{$lte:50}},{count:{$gte:70}}]}
  var users=db.collection("users");
  users.find(
    //{favorites:{$in:["跑步","旅游"]}}
    {favorites:{$all:["跑步", "旅游"]}}

).toArray()
    .then(arr=>{
      for(var p of arr){
        console.log(p);
      }
      db.close();
    }).catch(err=>{
      console.log(err);
      db.close();
    });
})