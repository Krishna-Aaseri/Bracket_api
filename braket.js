var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path")

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/api", (req, res) => {
     res.sendFile(path.join(__dirname + "/braket.html"));
});

app.post('/post', urlencodedParser, async function(req, res, next) {
   var expression = req.body.bracket;
   let brakets = ['()','[]','{}','']
   var input = expression.split()
   var a = "False";
   console.log(input)
   for (let i = 0; i<brakets.length; i++) {
     if (brakets[i] == input) {
        var a = "True";
     }
   }
   if (a == "True"){
    res.json({"Your expression is " : a});
   }
   else{
    res.json({"Your expression is " : a})
   }
})

app.listen(4001, () => {
    console.log("app listening at 4001");
});
