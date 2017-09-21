var mongoose=require("mongoose");
require("./05_product.model");
var Product=mongoose.model("Product");
require("./mongoose")().then(db=>{
  //Product.find({count:{$gte:50,$lte:80}})
  //Product.find().where("count").lte(80).gte(50)
  //.sort({count:-1}).limit(2).select({pname:1, count:1})
  //Product.find({$or:[{count:{$lt:50}},{count:{$gt:70}}]})
  Product.find().or([{count:{$lt:50}},{count:{$gt:70}}])
    .exec()
    .then(result=>{
      console.log(result);
      mongoose.disconnect();
    })
    .catch(err=>{
      console.log(err);
      mongoose.disconnect();
    });
})