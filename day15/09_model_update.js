var mongoose=require("mongoose");
require("./02_book.model");
var Book=mongoose.model("Book");
require("./mongoose")().then(db=>{
  Book.update(
    {},
    {$set:{publicationDate:new Date()}},
    {multi:true}
  ).then(r=>{
    console.log(r.n+"个文档被更新");
    return Book.find().select({publicationDate:1}).exec();
  }).then(books=>{
    console.log(books);
    mongoose.disconnect();
  }).catch(err=>{
    console.log(err);
    mongoose.disconnect();
  })

});