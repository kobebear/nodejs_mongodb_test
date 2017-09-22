var mongoose=require("mongoose");
require("./13_user.model");
var User=mongoose.model("User");
require("./mongoose")().then(db=>{
  User.findOne().where("uname","zhangdong").exec()
    .then(u=>{
      console.log(u.toJSON());
      u.age++;
      return u.save();
    })
    .then(u=>{
      console.log(u.toJSON());
      return u.remove()
    })
    .then(u=>{
      console.log(u.toJSON());
      mongoose.disconnect();
    })
    .catch(err=>{
      console.log(err);
      mongoose.disconnect();
    })
})