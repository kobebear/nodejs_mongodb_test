var mongoose=require("mongoose");
require("./02_book.model");
var Book=mongoose.model("Book");
require("./mongoose")().then(db=>{
  Book.remove({title:"MEAN Web 开发"})
  .then(r=>{//强调: 删除的结果文档和更新的结果文档不一样！
    console.log(r.result.n+"个文档被删除");
    return Book.find().select({title:1}).exec();
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