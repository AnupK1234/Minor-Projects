const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    // res.send("Calculator1");
    res.sendFile(__dirname + "/index.html");
})

// app.post() is required to handle any post request
app.post("/", function(req, res){
    let n1 = parseInt(req.body.num1); // Number(req.body.num1)  ---> Another method to convert string to number
    let n2 = parseInt(req.body.num2);

    let result = n1 + n2;
    res.send("Result : "+ result);
});

app.listen(3000, function(req, res){
    console.log("Server started at Port:3000");
})