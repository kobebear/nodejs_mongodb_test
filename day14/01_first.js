//Step0:引入数据库配置模块
//var config=require("./config.js");
//Step1: 首先，需要获得MongoClient对象
//var MongoClient=require('mongodb').MongoClient;
//Step2: 其次，定义连接字符串
//var url = 'mongodb://localhost:27017/test';
//Step3: 使用MongoClient的connect方法，传入连接字符串作为参数。
//第二个参数: connect方法执行完成后，自动调动的回调函数:
// MongoClient.connect(url, (err, db)=>{
//   if(err==null){
//     console.log("连接成功");
//     db.close();
//   }else{
//     console.log("连接失败");
//     console.log(String(err));
//   }
// });
// MongoClient.connect(url)
//   .then(
//     db=>{
//       console.log("连接成功");
//       db.close();
//     },
//     err=>{
//       console.log("连接失败");
//       console.log(String(err));
//     }
// );
//MongoClient.connect(config.url)
require("./getDB")().then(db=>{
  console.log("连接成功");
  db.close();
})
// .catch(err=>{
//   console.log("连接失败");
//   console.log(String(err));
// });


