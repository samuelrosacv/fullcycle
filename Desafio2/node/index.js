const Pessoa=require("./models/Pessoa")
const express = require('express')
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

Pessoa.create({name:"Samuel Rosa dos Santos"})

const app = express()
app.use('/public', express.static(__dirname + '/public'))

app.engine('hbs', exphbs.engine({extname: '.hbs', handlebars: allowInsecurePrototypeAccess(Handlebars)}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    Pessoa.findAll().then(function(pessoas){
      console.log(pessoas);
      res.render('index',{pessoas:pessoas})
    });
})
app.get('/sobre', (req, res) => {
    res.render('sobre')
})

app.listen(8000, () => {
  console.log('Server online')
})