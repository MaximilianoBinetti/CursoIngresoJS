/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
  var nombre;
  
  nombre = prompt("Por favor ingrese su nombre", "Ej: Roberto");

  document.getElementById('elNombre').value = nombre; //en este caso se pone el = var para que la var figure en la página 

 


}

