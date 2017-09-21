var mongoose=require("mongoose");
require("./02_book.model");
var Book=mongoose.model("Book");
require("./mongoose")().then(db=>{
  Book.findOneByTitle("JAVASCRIPT权威指南")
  .then(book=>{
    console.log(book);
    mongoose.disconnect();
  })
  .catch(err=>{
    console.log(err);
    mongoose.disconnect();
  })
})