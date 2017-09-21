var mongoose=require("mongoose");
require("./02_book.model");
var Book=mongoose.model("Book");
var books=[
  new Book({
    title:"React导学",
    author:{name:"Cory"},
    publisher:"Apress",
    pages:182
  }),
  new Book({
    title:"MEAN Web 开发",
    author:{name:"Amos"},
    publisher:"图灵",
    pages:241
  })
];
require("./mongoose")().then(db=>{
  Book.create(books)
    .then(books=>{
      console.log(books);
      return Book.find();
    })
    .then(books=>{
      console.log("==================");
      console.log(books);
      mongoose.disconnect();
    })
    .catch(err=>{
      console.log(err);
      mongoose.disconnect();
    })
})
