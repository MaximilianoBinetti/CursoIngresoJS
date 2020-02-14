function mostrar()
{
 var edad;
 var ecivil;

 edad = document.getElementById('edad').value;
 ecivil = document.getElementById('estadoCivil').value;

 if ( edad > 17 && ecivil == "Soltero")
 {
 	alert("Es soltero y no es menor");
 } 

	


}//FIN DE LA FUNCIÓN