var mongoose=require("mongoose");
require("./11_emp.model");
var Emp=mongoose.model("Emp");
require("./mongoose")().then(db=> {
  // Emp.aggregate([
  //   {$project: {"address.city": 1}},
  //   {$group: {_id: "$address.city", count: {$sum: 1}}},
  //   {$sort: {count: -1}},
  //   {$limit: 5}
  // ])
  Emp.aggregate()
    .project({"address.city":1})
    .group({_id:"$address.city",count:{$sum:1}})
    .sort({count:-1})
    .limit(5)
    .exec()
    .then(function (results) {
      console.log(results);
      mongoose.disconnect()
    }).catch(function (err) {
      console.log(String(err));
      mongoose.disconnect();//关闭连接
    })
});
