const express =require('express');
const app = express();
const db =require('./confic/db');
const path = require('path');

const bcrypt=require('bcrypt');
const bodyParser = require('body-Parser');

app.use(express.json());



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{

});


const port=process.env.port || 80;
app.listen(port, () => console.log('escuchando en puesrto'));
db()





