require("./getDB")().then(db=>{
  var books=db.collection("books");
  var cursor=books.find({publisher:"O'Reilly"});
  cursor.next().then(book=>{
    console.log(book);
    return books.findOne({publisher:"Wrox"})
  }).then(book=>{
    console.log(book);
    db.close();
  }).catch(err=>{
    console.log(err);
    db.close();
  });
})