require("./getDB")().then(db=>{
  //如果有books集合，就先删除
  (()=>new Promise(resolve=>{
      //不存在books，删除会出错
      db.dropCollection("books")
        //无论是否成功删除，都继续执行后续操作
        .then(resolve,resolve);
  }))()
    //创建books集合
    .then(()=>db.createCollection("books"))
    .then(books=>//再向books中添加一个文档
      books.insertMany([
        {
          title: "JavaScript权威指南",
          author: "大卫",
          type: "JavaScript",
          publisher: "O'Reilly"
        },
        {//第二个文档
          title:"JavaScript高级程序设计",
          author:"尼古拉斯",
          type:"JavaScript",
          publisher:"Wrox"
        }
      ])
    ).then(result=>{//再输出result对象
      //console.dir(result);
      db.collection("books",(err,books)=>{
        books.find().toArray()
          .then(arr=>{
            for(var book of arr){
              console.log(book);
            }
            db.close();
          })
      })
    }).catch(err=>{//错误处理
      console.log(err);
      db.close();
    })
});