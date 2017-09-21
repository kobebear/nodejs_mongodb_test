require("./getDB")().then(db=>{
  var books=db.collection("books");
  books.updateOne(//为javascript权威指南添加库存属性,初始化为50
    {title:"JavaScript权威指南"},
    {$set:{stock:50}}
  ).then(()=>//查询修改结果
    books.findOne({title:"JavaScript权威指南"})
  ).then(book=>{
    console.log(book);//输出修改结果
    return books.updateOne(//然后库存再增加10
      {title:"JavaScript权威指南"},
      {$inc:{stock:10}}
    );
  }).then(()=>//查询，并输出修改后的结果: 库存: 60
    books.findOne({title:"JavaScript权威指南"})
  ).then(book=>{
    console.log(book);
    db.close();
  }).catch(err=>{
    console.log(err);
    db.close();
  })
})