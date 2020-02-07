/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma 

	primerNumero = document.getElementById('numeroUno').value;
	primerNumero = parseInt(primerNumero);  //con parseInt se transforma en valor en un número entero real, capaz de ser sumado y no concatenado como una palabra
	console.log(primerNumero);
    
    segundoNumero = document.getElementById('numeroDos').value;
    segundoNumero = parseInt(segundoNumero);
    console.log(segundoNumero);
    
    suma = primerNumero + segundoNumero; 

    alert(suma);

   }; 


