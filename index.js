const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const courselib = require('./Backend/lib/courselib');

var pswd = process.env.mongoosepswd;
console.log(pswd);
 app.use(express.urlencoded({extended: true}));
 app.use(express.json());
 
app.use(express.static(path.join(__dirname, "Frontend")));
app.use(express.static(path.join(__dirname, "Backend")));

var connection_string = "mongodb+srv://cluster0.uapdk.mongodb.net/myFirstDatabase";
mongoose.connect(connection_string, { useFindAndModify: false });
var db = mongoose.connection;
db.on('connected', function () {
console.log('MongoDB connected!');
});

db.on('error', function (error) {
console.error('Error in MongoDb connection: ' + error);
});

db.on('disconnected', function () {
console.log('MongoDB disconnected!');
});
app.get("/", function(req, res){
   // res.send("Welcome");
    res.sendFile(__dirname+"/Frontend/html/start.html");
})
app.get("/CFcrawler",function(req,res){
    res.sendFile(__dirname+"/Frontend/html/crawler.html");
})
app.get("/resume",function(req, res){
    res.sendFile(__dirname+"/Frontend/html/index2.html");
})
app.get("/color",function(req,res){
    res.sendFile(__dirname+"/Frontend/html/icolor.html");
})
app.get("/todo",function(req,res){
    res.sendFile(__dirname+"/Frontend/html/todo.html");
});
app.get("/google", function(req, res){
    res.sendFile(__dirname+"/Frontend/html/index.html");
})
app.get("/chart",function(req,res){
    res.sendFile(__dirname+"/Frontend/html/schart.html");
})
app.get("/crudOperations",function(req,res){
    res.sendFile(__dirname+"/Frontend/html/crud.html");
})
app.get("/Tambola",function(req,res){
    res.sendFile(__dirname+"/Frontend/html/tambola.html");
})
//API
app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.put("/crud/:idd", courselib.update);
app.post("/crud",courselib.addnewone);
//END OF API

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
