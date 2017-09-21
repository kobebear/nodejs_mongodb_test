var mongoose=require("mongoose");
var url=require("./config").url;
mongoose.connect(url,{useMongoClient:true});
var db=mongoose.connection;
db.on('connected', function () {
  console.log('Mongoose default connection open to ' + url);
}).on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
}).on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});