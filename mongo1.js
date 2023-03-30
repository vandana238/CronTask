const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://vandana:<vandana23>@cluster0.sbgc1y5.mongodb.net/?retryWrites=true&w=majority", {
useNewUrlParser: true,
useUnifiedTopology: true
});
//  mongoose.connect("mongodb://localhost:27017",(err)=>{
//     if(!err) console.log('db connected');
//     else console('db error')
//  })

app.listen(8082, () => {
console.log(" connection  lisyen on running")
})