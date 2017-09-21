var mongoose=require("mongoose");
mongoose.Promise=global.Promise;
//抛出返回Promise对象的函数模块，其中封装mongose连接数据库的操作
module.exports=()=>new Promise(resolve=>
  mongoose.connect(
    require("./config").url,{useMongoClient: true}
  ).then(resolve)
    .catch(err=>console.log(err))
)
