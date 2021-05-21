const hbs = require ('hbs')

hbs.registerHelper('listar', (usuarios)=>{	
	texto = ""
	usuarios.forEach(usu => {		
		texto = `${texto} <tr><td> <button type="submit" class='form-control btn btn-primary btn-sm' name='cedula' value='${cl.cedula}'>Eliminar</button></td> 
						<td> ${usu.cedula} </td> 
						<td> ${usu.nombre} </td>
						<td> ${usu.correo} </td>
                        <td> ${usu.telefono} </td></tr>`
		})
		texto = texto + "</tbody></table>";				
	return texto
})

hbs.registerHelper('listarcursos', (cursos)=>{	
	texto = ""
	cursos.forEach(cur => {		
		texto = `${texto} <tr> 
						<td> ${cur.id} </td> 
						<td> ${cur.nombrecurso} </td>
						<td> ${cur.precio} </td>
						<td> ${cur.modalidad} </td>
						</tr>`
		})
		texto = texto + "</tbody></table>";				
	return texto
})

hbs.registerHelper('tablacursos', (tabla)=>{	
	texto = ""
	tabla.forEach(usu => {		
		texto = `${texto} <tr> 
						<td> ${usu.cedula} </td> 
						<td> ${usu.nombrecurs} </td>
						<td> ${usu.precio} </td>
						<td> ${usu.modalidad} </td>						
						</tr>`
		})
		texto = texto + "</tbody></table>";				
	return texto
})




hbs.registerHelper('listausuarios', (usuarios)=>{	
	let texto = "<select name='cedula' class='form-control'>";	
	usuarios.forEach(usu => {
		texto = `${texto} <option value='${usu._id}'>${usu.nombre}</option>`		
		})	
		texto = texto + "</select>"
	return texto
})

hbs.registerHelper('listacursos', (cursos)=>{	
	let texto = "<select name='idcurso' class='form-control'>";	
	cursos.forEach(usu => {
		texto = `${texto} <option value='${usu._id}'>${usu.nombrecurso}</option>`		
		})	
		texto = texto + "</select>"
	return texto
})
