var mongoose=require("mongoose");
require("./02_book.model");
var Book=mongoose.model("Book");
require("./mongoose")().then(db=>{
  Book.findOne({title:"React导学"}).exec()
    .then(book=>{
      console.log(book);
      //book.publicationDate=new Date();
      //return book.save();
      return book.update({$set:{publicationDate:new Date()}});
    })
    .then(book=>{
      console.log(book);
      return Book.find();
    })
    .then(books=>{
      console.log(books);
      mongoose.disconnect();
    })
    .catch(err=>{
      console.log(err);
      mongoose.disconnect();
    })
});