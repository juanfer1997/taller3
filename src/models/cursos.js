const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const cursosSchema = new Schema ({
    
	nombrecurso : {
		type : String,
		required : true	,
		unique : true	
	},
	
	precio: {
		type : Number,
		default : 0,
		min : 0
	}
});
cursosSchema.plugin(AutoIncrement, {inc_field: 'id'});
const curso = mongoose.model('cursos', cursosSchema);
module.experts = curso