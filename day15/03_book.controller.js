var mongoose=require("mongoose");
require("./02_book.model");
require("./mongoose.js");
var Book=mongoose.model("Book");

var book1=new Book({
  bookName:"JavaScript权威指南",
  author:{authorName:"David", school:"MIT"},
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
//将文档保存到数据库的集合中:
book1.save()
  // .then(Book.find)//查询集合中的文档
  // .then(books=>console.log(books))//输出查询结果
  .catch(err=>{
    console.log(err);
    mongoose.disconnect();
  })