require("./getDB")().then(db=>{
  db.collection("collFromNode",{strict:true},(err,coll)=>{
    //先判断集合是否存在
    (()=>{
      return new Promise(resolve=>{
        if(!err) {//如果存在，先删除
          console.log("已存在,先删除");
          db.dropCollection("collFromNode")
            .then(resolve());
        }else{//否则，直接执行后续操作
          console.log("不存在，可直接创建操作...");
          resolve();
        }
      })
    })()
    .then(()=>{//删除后，再创建
      console.log("创建新集合:collFromNode");
      return db.createCollection("collFromNode");
    })
    .then(coll=>{//创建后，显示集合名
      console.log(coll.collectionName+"初始化成功!");
      db.close();
    })
    .catch(err=>{
      console.log(err);
      db.close();
    });
  });
});