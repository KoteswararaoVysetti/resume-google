const express =require('express');
const app=express();
app.use(express.static(__dirname+"/Frontend"));
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
app.get("/google", function(req, res){
    res.sendFile(__dirname+"/Frontend/html/index.html");
})
app.get("/chart",function(req,res){
    res.sendFile(__dirname+"/Frontend/html/schart.html");
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
