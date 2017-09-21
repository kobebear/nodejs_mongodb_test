require("./mongoose")()
  .then(db=>{
    console.log("We are connected!");
    db.close();
  })
// var mongoose=require("mongoose");
// mongoose.Promise=global.Promise;
// mongoose.connect(require("./config").url,{useMongoClient: true})
//   .then(()=>{
//     console.log("We are connected!");
//     mongoose.disconnect();
//   })
//   .catch(err=>console.log(err));
// var db=mongoose.connection;
// db.on("error",err=>console.log(err))
//   .on("open",()=>{
//     console.log("We are connected!");
//     mongoose.disconnect();
//   });