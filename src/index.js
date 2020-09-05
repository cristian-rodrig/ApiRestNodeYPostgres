const express = require('express');
const app = express();

//Midlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Rutas
app.use(require('./routes/index'));


app.listen(3000);
console.log('Serven on port : 3000');

