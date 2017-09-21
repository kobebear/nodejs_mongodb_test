var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var EmpSchema=new Schema({
  ename:String,
  address:{city:String,street:String}
});
mongoose.model("Emp",EmpSchema);
