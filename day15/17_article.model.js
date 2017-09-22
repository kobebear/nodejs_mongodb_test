var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var ArticleSchema=new Schema({
  title:String,
  content:String,
  createdDate:{type:Date,default:new Date()},
  user_id:{
    type:Schema.ObjectId,
    ref:'User'
  }
});
mongoose.model("Article",ArticleSchema);