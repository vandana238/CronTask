var express = require('express')
var app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const uuid =require('uuid')
const uniqueid=uuid.v4
const employe = [
    { 
        empid: uuid.v4(),
        ename: "vandhana",
        department: "development"
    },
    { 
        empid: uuid.v4(),
        ename: "chelluri",
        department: "development"
    }]
    console.log(employe)
   
    app.get('/empp',(req, res)=> {
        employe.find((err, data)=> {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        })
     })
app.listen(9032,()=>{
    console.log("its worked")
})
 