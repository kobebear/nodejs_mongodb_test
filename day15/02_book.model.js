var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var BookSchema=new Schema({
  title:{type:String,index:1, required:true, unique:true},
  author:{name:String,school:String},
  publisher:String,
  publicationDate:{type:Date,default:Date.now},
  pages:Number,
  kwords:[String],
  comments:[{username:String,comment:String}]
});
BookSchema.methods.toString=function(){
  console.log("专门为schema模型定义的toString方法: ");
  return `<<${this.title}>>
  ${this.author.name} 著   
  出版时间: ${this.publicationDate.toLocaleDateString()}`;
}
BookSchema.statics.findOneByTitle=function(title){
  return this.findOne({title: new RegExp(title,"i")}).exec();
}

mongoose.model("Book",BookSchema);

