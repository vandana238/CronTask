var express = require('express')
var app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const uuid = require('uuid')
const uniqueid = uuid.v4
const employe = [
    {
        empid: uuid.v4(),
        ename: "vandhana",
        department: "development"
    },
    {
        empid: uuid.v4(),
        ename: "pravlika",
        department: "recruitment"
    },
    {
        empid: uuid.v4(),
        ename: "divya",
        department: "human_resource"
    },
    {
        empid: uuid.v4(),
        ename: "sruthi",
        department: "human_resource"
    },
    {
        empid: uuid.v4(),
        ename: "bhavani",
        department: "devlopment"
    },
    {
        empid: uuid.v4(),
        ename: "rupa",
        department: "sales"
    },
    {
        empid: uuid.v4(),
        ename: "bindhu",
        department: "devlopment"
    },
    {
        empid: uuid.v4(),
        ename: "chelluri",
        department: "IT"
    },
    {
        empid: uuid.v4(),
        ename: "pandu",
        department: "IT"
    },
    {
        empid: uuid.v4(),
        ename: "pinky",
        department: "managment"
    }
]
console.log(employe)
app.get('/:empid', (req, res) => {
    var uid = req.params.empid;
    var index = employe.findIndex(u_id => {
        return (u_id.empid == uid)
    })
    console.log(index)
    if (index >= 0) {
        res.status(200).send({ data: employe[index], status: true, message: "succesfully" })
        console.log(employe[index])
    }
    else {
        res.status(404).send({ data: "error", status: false, message: "user not found" })
    }
    res.send(employe)
})
app.post('/post', (req, res) => {
    var details = [
        {
            empid: req.body.empid,
            ename: req.body.ename,
            department: req.body.department
        }
    ]
    st = details.push(employe)
    res.send(details)
    if (st) {
        res.status(200).send({ data: employe, status: true, message: "succesfully" })
    }
    else {
        res.status(404).send({ data: "error", status: false, message: "user not found" })
    }
    res.send(details)
})
app.put('/put/:empid', (req, res) => {
    var details = [
        {
            empid: req.params.empid,
            ename: req.body.ename,
            department: req.body.department
        }
    ]
    sv = details.push(employe)
    res.send(details)
    if (sv) {
        res.status(200).send({ data: employe, status: true, message: "succesfully" })
    }
    else {
        res.status(404).send({ data: "error", status: false, message: "user not found" })
    }
    res.send(details)
})

var bodyParser = require('body-Parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.delete('/:empid', (req, res) => {
    console.log(employe)
    empid = req.params['empid'];
    for (i = 0; i < employe.length; i++) {
        if (employe[i].empid == empid) {
            sn = employe.splice(employe[i], 1)
        }
    }
    if (sn) {
        res.status(200).send({ data: employe, status: true, message: "succesfully" })
    }
    else {
        res.status(404).send({ data: "error", status: false, message: "user not found" })
    }
    res.send(details)
    res.json(employe)
})
app.listen(3080, () => {
    console.log("server is running")
})

