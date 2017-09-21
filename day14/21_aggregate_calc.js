require("./getDB")().then(db=>{
  var coll=db.collection("eHealth");
  coll.aggregate([
    {$project:{qlt:{
      $divide:[
        "$weight",
        {$multiply:[
          {$divide:["$height",100]},
          {$divide:["$height",100]}
        ]}
      ]
    }}},
    {$project:{qlt:{
      $cond:[
        {$gt:["$qlt",25]},
        "胖",{$cond:[{$gte:["$qlt",20]},"正常","瘦"]}
      ]
    }}},
    {$group:{_id:"$qlt",count:{$sum:1}}}
  ]).toArray().then(result=> {
    console.log(result);
    db.close();
  }).catch(err=>{
    console.log(err);
    db.close();
  })
})