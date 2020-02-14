function mostrar()
{
 
 var edad
 var ecivil

 edad = document.getElementById('edad').value;

 ecivil = document.getElementById('estadoCivil').value;

 if( edad < 17  && ecivil != "Soltero")
 {
 	alert("Es usted muy pequeñ@ para no ser solter@");
 }

	


}//FIN DE LA FUNCIÓN