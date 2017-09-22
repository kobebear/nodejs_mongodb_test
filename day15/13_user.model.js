var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var UserSchema=new Schema({
  uname:{type:String,unique:true},
  birth:{
    type:Date,
    get(val){
      console.log("调用birth的get方法");
      return `${val.getFullYear()}年${val.getMonth()+1}月${val.getDate()}日`;
    },
    validate:[
      val=>{
        var ys=365*24*3600;//一年的秒数
        var maxs=65*ys, mins=18*ys;//秒数最大范围:
        var ages=(new Date().getTime()-val.getTime())/1000;//计算秒差
        return ages>=mins&&ages<=maxs;//判断秒差的范围
      },
      "年龄必须介于18~65岁之间!"
    ]
  },
  website:{
    type:String,
    set(val){
      console.log("调用website的set方法");
      if(!/^https?:\/\//.test(val))
        return `http://${val}`;
    }
  },
  firstName:String,
  lastName:String,
  email:{type:String, required:true, match: [/.+\@.+\..+/,"邮箱格式不符"]},
  roles:{type:String, required:true, enum:{values: ["Admin","Owner","User"], message:"无效角色"}},
  age:{type:Number, min:[18,"年龄必须大于等于18岁"], max:[65, "年龄必须小于等于65岁"]}
});
UserSchema.virtual("fullName")
  .get(function(){
    return `${this.firstName} ${this.lastName}`
  })
  .set(function(fullName){
    [this.firstName, this.lastName]=fullName.split(" ");
  });
UserSchema.pre("init",next=>{
  console.log("开始创建一个来自数据库的user对象");
  next();
}).pre("save",function(next){
  console.log(this.uname+" 的修改将要保存到数据库");
  next();
}).post("remove",doc=>console.log(doc.uname+" 被删除"));
UserSchema.set("toJSON",{getters:true});
mongoose.model("User",UserSchema);