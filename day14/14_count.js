require("./getDB")().then(db=> {
  var users = db.collection("users");
  //users.count({"address.city": "北京"})
  users.find({"address.city":"北京"}).count()
    .then(count => {
      console.log(count);
      db.close();
    })
    .catch(err => {
      console.log(err);
      db.close();
    });
})