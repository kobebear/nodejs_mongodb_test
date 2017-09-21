var config=require("./config");
module.exports=function(){
  return new Promise(resolve=>{
    var MongoClient=require('mongodb').MongoClient;
    MongoClient.connect(config.url).then(db=>resolve(db))
      .catch(err=>console.log(err));
  })
}