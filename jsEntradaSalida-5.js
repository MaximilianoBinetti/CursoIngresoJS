/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre = document.getElementById('elNombre').value; 
	edad = document.getElementById('laEdad').value;
    
    console.log("Usted se llama " +  nombre + "  y tiene  " + edad + "  años."); // se concatena con + las veces que sean necesarias en cuanto a la cantidad de veces que los valores ingresados interrumpan el texto predeterminado por la consigna
	
	alert("Usted se llama " +  nombre + "  y tiene  " + edad + "  años.");
}

