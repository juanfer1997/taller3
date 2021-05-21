const express = require('express')
const app = express()
const path = require ('path')
const hbs = require ('hbs')
const bodyParser = require ('body-parser')
require('../helpers/helpers')
const dirPublic = path.join(__dirname, "../../public")
const dirViews = path.join(__dirname, "../../template/views")
const dirPartials = path.join(__dirname, '../../template/partials')
const usuario = require ('../models/usuarios')
//const {curso, usuariocurso} = require ('./../models/cursos')

//hbs
app.set('view engine', 'hbs');
app.set ('views', dirViews);
hbs.registerPartials(dirPartials)

//Paginas
app.get('/', function (req, res) {
	console.log('ingresa')
  res.render('index', {
  	titulo: 'Inicio',
  	mensaje: ''
  })
  
})
app.get('/usuarios', function (req, res){
	usuario.find({},(err, resultado)=>{
		if (err){
			return console.log(err)
		}
		console.log(resultado)
		res.render('usuarios', {
		titulo:'usuarios',
		res: resultado	
	})
})
})

app.post('/usuarios', function(req, res) {
	usuario.findOne({cedula : parseInt(req.body.cedula)},(err, resultado)=>{
		if (err){
			return console.log(err)
		}
		console.log(resultado)
		res.render('usuario2',{
		titulo: 'Ver usuario',
		cedula: resultado.cedula,
		nombre: resultado.nombre,
		corrreo: resultado.correo,
		telefono: resultado.telefono		
		})
	})
	app.get('/registrar', function (req, res){
		res.render('registrar', {
			titulo:'Regristar'		
		})
	})
	

});
app.post('/registrar', function (req, res){
	const salt = bcrypt.genSaltSync(saltRounds);
	let usuario = new usuario ({
		cedula: req.body.cedula,
		contrasena: bcrypt.hashSync(req.body.contrasena, salt),
		nombre: req.body.nombre,
		correo: req.body.correo,
		telefono:req.body.telefono	
	})

	usuario.save ((err, resultado)=>{
		if (err){
			return console.log(err)
		}
		console.log("ingresado a la BD")
		res.render('registrar', {
		titulo:'Regristar',		
		mensaje: 'Se ha creado con exito'	
		})
	})

	
})
app.get('/cursos', function (req, res){
	curso.find({},(err,resultado)=>{
				res.render('curso', {
				titulo:'curso',
				res: resultado,
				res1: resultado	
			})
	})
})
app.post('/cursos', function (req, res){
	let curso = new Curso ({
		nombreProducto : req.body.nombre,
		precio : parseInt(req.body.precio),
		cantidad : parseInt(req.body.cantidad)
	})
	producto.save ((err,resultado)=>{
		if (err){
			Producto.find({},(err,resultado)=>{
			res.render('cursos', {
				titulo:'cursos',
				error : 'Ya existe',
				res: resultado	
				})
			})
			return 
		}
			console.log(resultado)
			Producto.find({},(err,resultado)=>{
				res.render('cursos', {
				titulo:'cursos',
				res: resultado		
			})
		})				
	})
})
app.post('/actualizar', function (req, res){
	Cliente.findOneAndUpdate({cedula : parseInt(req.body.cedula)},{nombre:req.body.nombre, pais : req.body.pais},{new:true},(err, resultado)=>{
		if (err){
			return console.log(err)
		}
		console.log(resultado)
		res.render('actualizar',{
			titulo:'Actualizar',
			cedula: resultado.cedula,
			nombre: resultado.nombre,
			pais: resultado.pais	
		})
	})

})
app.post('/listar',(req, res) =>{
	funciones.listarusuarios()
})

app.get('/salir', (req, res) => {
	req.session.destroy((err) => {
  		if (err) return console.log(err) 	
	})	
	res.redirect('/')	
})
app.get('*',function (req, res) {
	res.render('error', {
		titulo: 'Error 404'
	})
})
module.exports = app