var mongoose=require("mongoose");
require("./02_book.model");
var Book=mongoose.model("Book");

var book1=new Book({
  title:"JavaScript权威指南",
  author:{name:"David", school:"MIT"},
  publisher:"O'Reilly",
  pages:1004,
  kwords:["javascript","web","前端","犀牛"],
  comments:[
    {
      username:"布兰登艾奇",
      comment:"本书是JavaScript程序员的必备参考"
    },
    {
      username:"汤姆",
      comment:"本书教会了我JavaScript"
    }
  ]
});

require("./mongoose")()
  .then(db=>{
    book1.save()
      .then(book=>{//save()返回刚保存的文档
        console.log(book.toString());
        return Book.find();//Book模型提供了查询的功能
      })
      .then(books=>{
        //mongoose中Book模型的find不返回游标，而是返回结果集合
        console.log(books);
        mongoose.disconnect();
      })
      .catch(err=>{
        console.log(err);
        mongoose.disconnect();
      });
  })