var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var ProductSchema=new Schema({
  pname:String,
  count:Number
});
mongoose.model("Product",ProductSchema);

