var mongoose=require("mongoose");
require("./13_user.model");
var User=mongoose.model("User");
var user1=new User({
  uname:"zhangdong",
  email:"zhangdong@tedu.cn",
  roles:"Admin",
  age:33,
  birth:new Date("1999/01/01")
});
require("./mongoose")().then(db=>{
  user1.save()
    .then(u=>{
      console.log(u);
      mongoose.disconnect();
    })
    .catch(err=>{
      console.log(err);
      mongoose.disconnect();
    })
});