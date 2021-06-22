const fs = require('fs');
const express = require('express');
const app = express();
const workingTime = require('./middleware')

app.get(('/'),workingTime,(req,res)=>{
    fs.readFile('./home/homePage.html','utf-8',(err,data)=>{
        err ? console.error(err) : res.send(data);
    })
    app.use(express.static("home"));
});

app.get(('/services'),workingTime,(req,res)=>{
    fs.readFile('./services/ourServices.html','utf-8',(err,data)=>{
        err ? console.error(err) : res.send(data);
    })
    app.use(express.static("services"));
});

app.get(('/contacts'),workingTime,(req,res)=>{
    fs.readFile('./contacts/contactsUs.html','utf-8',(err,data)=>{
        err ? console.error(err) : res.send(data);
    })
    app.use(express.static("contacts"));
});



// define port
const PORT = process.env.PORT || 4000;
app.listen(PORT, err => err ? console.error(err) : console.log(`server is running on port ${PORT}`));