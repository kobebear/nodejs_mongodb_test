require("./getDB")().then(db=>{
  var coll=db.collection("eHealth");
  coll.group(
    function(obj) {
      return {
        qlt: (obj=>{
          var qlt =
            obj.weight/Math.pow(obj.height/100,2);
          return qlt > 25 ? "胖":
                 qlt < 20 ? "瘦":
                           "正常";
        })(obj)
      }
    },
    {},
    {count:0},
    function(obj,prev){ prev.count++;},
    function(obj){
      var newObj={};
      newObj[obj.qlt]=obj.count;
      return newObj;
    },
    true
  ).then(count=>{
    console.log(count);
    db.close();
  }).catch(err=>{
    console.log(err);
    db.close();
  })
})