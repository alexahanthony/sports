var express = require('express');

var app = express();

const PORT = process.env.PORT || 3000;

app.get(`/`, (req,res)=>{
    res.send(`Welcome to my API!`);
});

app.get(`/sports`, (req,res)=>{
    res.json({
        name:'sports',
        bestSport: 'equestrian'
    })
});

app.listen(PORT,function(){
    console.log('listen on port ' + PORT)
});