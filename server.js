var express = require("express");
var path = require("path");

var app = express();
var PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
	res.json("You are on the homepage")
});

app.post("/post", function(req, res) {
    res.json("Welcome " + req.body.user);
});

app.delete("/delete/:taskId", (req,res) => {
    res.json("delete: true ");
})

app.put("/put/:taskId", (req,res) => {
    res.json(`task ${req.params.taskId} has been updated`);
})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});