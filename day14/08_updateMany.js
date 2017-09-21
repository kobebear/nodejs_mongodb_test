require("./getDB")().then(db=>{
  var books=db.collection("books");//获得books集合
  books.find().toArray()
    .then(arr => {
      console.log("更新前: ");
      for (var book of arr) {//遍历每个书籍
        console.log(book);//输出每本书当前的数量
      }
      //为每个商品数量+10
      return books.updateMany({}, {$inc: {stock: 10}});
    }).then(result => {
    return books.find().toArray();
  }).then(arr => {
    console.log("更新后: ");
    for (var book of arr) {//遍历每个书籍
      console.log(book);//输出每本书的数量
    }
    db.close();
  }).catch(err => {
    console.log(err);
    db.close();
  });
})