//jshint esversion:6

// visit---expressjs.com

// L-227 ---crfeating our first server with express js
// const express = require("express");
// const app=express();
// app.listen(3000,function(){
//     console.log("server started on port 3000")
// });


// L--228---Handling Request and responses: GET Request

// "/" --specifies route--here to get home page of local host

const express = require("express");
const app=express();

app.get("/", function(request,response){
    console.log(request);
    response.send("<h1>hello world </h1>")  //to send response to server
})

app.get("/contact",function(req,res){
    res.send("contact me at: abcd@gmail.com")
})

app.get("/about",function(req,res){
    res.send("this is our about me page")
})


//nodemopn help us to hot reload automatically 
//call----nodemon file_name

app.get("/hobbies",function(req,res){
    res.send("<ul><li>cofffe</li><li>tea</li><li>fruit juice</li></ul>")
})

app.listen(3000,function(){
    console.log("server started on port 3000")
});


