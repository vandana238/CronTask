const express=require('express');
const app=express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// app.listen(8082, () => {
//     console.log(" connection  lisyen on running")
//     })