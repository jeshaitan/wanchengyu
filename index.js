var express = require("express"),
    bodyParser = require("body-parser"),
    mongodb = require("mongodb"),
    mongojs = require("mongojs"),
    session = require("express-session"),
    fs = require("fs");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: "msyang",
                 cookie: {maxAge: 60000},
                 resave: true,
                 saveUninitialized: true}));

app.use(express.static(__dirname + "/public"));

var uri = "mongodb://public:publicpass@ds047146.mlab.com:47146/wanchengyu";
var db = mongojs(uri, ["chengyu", "users"]);

app.listen(process.env.PORT || 3000, function() {
  console.log("完成語 listening on port 3000.");
});

app.get("/oftheday", function(req, res) {
  db.chengyu.find(function(err, docs) {
    if(err)
      console.log(err);
    else {
      res.json(docs);
      console.log('yo!')
    }
  });
});
