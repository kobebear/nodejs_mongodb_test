var mongoose=require("mongoose");
require("./13_user.model");
require("./17_article.model");
var User=mongoose.model("User");
var Article=mongoose.model("Article");
require("./mongoose")().then(db=>{
  User.findOne().where("uname","zhangdong").exec()
    .then(u=>{
      return new Article({
        title:"welcome to my web site",
        content:"no zuo no die, no can no bibi, you can you up!",
        user_id:u._id
      }).save();
    })
    .then(a=> {
      console.log(a);
      return Article.findOne().where("_id", a._id).populate("user_id").exec();
    })
    .then(a=>{
      console.log(a);
      mongoose.disconnect();
    })
    .catch(err=>{
      console.log(err);
      mongoose.disconnect();
    })
});
