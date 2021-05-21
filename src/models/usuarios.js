const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const usuariosSchema = new Schema ({
	cedula : {
		type : Number,
		required : true
	},
	nombre : {
		type : String,
		required : true,
		trim : true
	},
	
	correo : {
		type : String,
		default : "juan@",
		trim: true
	},
	telefono : {
		type : Number,
		required : true
	},
});

const usuario = mongoose.model('Usuario', usuariosSchema);
module.exports = usuario