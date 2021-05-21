require('./config');
const express = require('express')
const app = express()
const path = require ('path')
const hbs = require ('hbs')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')
require('./helpers/helpers')

const dirPublic = path.join(__dirname, "../public")
const dirViews = path.join(__dirname, "../template/views")
const dirPartials = path.join(__dirname, '../template/partials')


app.use(express.static(dirPublic))


app.use(bodyParser.urlencoded({extended : false}))

app.set('view engine', 'hbs');
app.set ('views', dirViews);
hbs.registerPartials(dirPartials)

app.use(require('./routes/index.js'))


mongoose.connect(process.env.URLDB, {useNewUrlParser: true, useUnifiedTopology: true}, (err, resultado)=>{
	if (err) {
		console.log("error al conectar")
	}
	console.log(" se ha conectado a la base de datos")
});


app.listen(process.env.PORT, () => {
	console.log ('Servidor en el puerto' + process.env.PORT)
})

/*const Mongousu = require('mongodb').Mongousu;


const url = 'mongodb://localhost:27017';


const dbName = 'usuarios';


const usu = new Mongousu(url);


usu.connect(function(err) {
 
  console.log("Se conecto exitosamente");

  const db = client.db(dbName);

});*/
