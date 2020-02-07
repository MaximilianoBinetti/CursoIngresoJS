/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var primerNumero;  //definicion de variable en primeras lineas
	var segundoNumero;
    var resultadoDeLaSuma

	primerNumero = document.getElementById('numeroUno').value; //valores de cada variable
	primerNumero = parseInt(primerNumero);
	
	segundoNumero = document.getElementById('numeroDos').value;
    segundoNumero = parseInt(segundoNumero);
    
    resultadoDeLaSuma = primerNumero + segundoNumero;  // operación
    
    console.log(resultadoDeLaSuma);  //mensaje en el log de la consola
	
}

function restar()
{
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

