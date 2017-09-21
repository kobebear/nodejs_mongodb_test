var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var BookSchema=new Schema({
  title:String,
  author:{name:String,school:String},
  publisher:String,
  publicationDate:{type:Date,default:Date.now},
  pages:Number,
  kwords:[String],
  comments:[{username:String,comment:String}]
});
mongoose.model("Book",BookSchema);

