var express        = require("express"),
    app            = express(),
    mongoose       = require("mongoose");
    
//mongoose.connect("mongodb://localhost/kimberlychristine");    
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Pretty Picts!!");
});