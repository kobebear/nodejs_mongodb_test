require("./getDB")().then(db=>{
  var books=db.collection("books");
  //查询一个publisher:"O'Reilly"的文档
  books.findOne({publisher:"O'Reilly"})
    .then(book=>{
      book.comments=[];//为文档添加评论数组
      //以文档的_id作为条件，将更新后的文档整体替换回集合
      return books.updateOne({_id:book._id},book);
    }).then(result=>{//再次查询publisher:"O'Reilly"的文档
      console.log(result);
      return books.findOne({publisher:"O'Reilly"})
    }).then(book=>{
      console.log(book);//输出: 发现多了comments属性，值为数组
      db.close();
    }).catch(err=>{
      console.log(err);
      db.close();
    });
});