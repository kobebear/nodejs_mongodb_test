var mongoose=require("mongoose");
require("./13_user.model");
var User=mongoose.model("User");
var user1 = new User({
  uname: "smith",
  birth: new Date("1983/12/26"),
  website: "smith.tedu.cn",
  firstName:"Peter",
  lastName:"Smith",
});
console.log(user1);//实际存储
console.log(user1.birth);
console.log(user1.toJSON());//转为json字符串
//尝试通过修改fullName，同时修改firstName和lastName
user1.fullName="皮特 史密斯";
console.log(user1);