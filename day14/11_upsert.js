require("./getDB")().then(db=>{
  var names=["john","smith","john","lucy","lucy","john"];//唱票顺序
  //删除现有tasks集合
  (()=>new Promise(resolve=>{
    db.dropCollection("players")
      .then(resolve,resolve);
  }))()//再新创建players集合
  .then(()=>db.createCollection("players"))
  .then(players=>{//遍历唱票数组中每个名字
    var arr=[];
    for(var i=0;i<names.length;i++){
      arr.push(players.updateOne(//使用upsert方式记录每人得票数
        {name:names[i]},
        {$inc:{count:1}},
        {upsert:true,w:1,j:true}//启用upsert方式
      ));
    }
    return Promise.all(arr);//等待所有update完毕
  })
  .then(()=>db.collection("players").find().toArray())//查询唱票结果
  .then(arr=>{
    for(var p of arr){
      console.log(p);
    }
    db.close();
  }).catch(err=>{
    console.log(err);
    db.close();
  });
})