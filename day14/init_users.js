db.users.drop();
db.users.insert([    
  {uid:1, name:"john", address:{city:"北京", street:"万寿路"}},    
  {uid:2, name:"smith", address:{ street:"万寿路",city:"北京"}},    
  {uid:3, name:"jack", address:{ city:"北京", street:"北苑路"}},    
  {uid:4, name:"rose", address:{ city:"西安", street:"万寿路"}},    
  {uid:5, name:"tom", address:{city:"北京", street:"万寿路", no:"121" }}
]);
db.users.update({uid:1},{$set:{favorites:["音乐","篮球","游泳"]}});
db.users.update({uid:2},{$set:{favorites:["跑步","篮球","旅游"]}});
db.users.update({uid:3},{$set:{favorites:["游泳","音乐","跑步"]}}); 
db.users.update({uid:4},{$set:{favorites:["音乐","旅游","跑步"]}});
