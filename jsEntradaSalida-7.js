/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	numeroUno = document.getElementById('numeroUno').value;
    numeroUno = parseInt(numeroUno);
	
	var numeroDos; 
	numeroDos= document.getElementById('numeroDos').value;
    numeroDos = parseInt(numeroDos);
    
    var sumar; 
    sumar = numeroUno + numeroDos;

    alert(sumar)  
}

function restar()
{
	 var numeroUno;
	numeroUno = document.getElementById('numeroUno').value;
    numeroUno = parseInt(numeroUno);
	
	var numeroDos; 
	numeroDos= document.getElementById('numeroDos').value;
    numeroDos = parseInt(numeroDos);
    
    var restar; 
    restar = numeroUno - numeroDos;

    alert(restar)  
}

function multiplicar()
{ 
	 var numeroUno;
	numeroUno = document.getElementById('numeroUno').value;
    numeroUno = parseInt(numeroUno);
	
	var numeroDos; 
	numeroDos= document.getElementById('numeroDos').value;
    numeroDos = parseInt(numeroDos);
    
    var multiplicar; 
    multiplicar = numeroUno * numeroDos;

    alert(multiplicar)  
}

function dividir()
{
	var numeroUno;
	numeroUno = document.getElementById('numeroUno').value;
    numeroUno = parseInt(numeroUno);
	
	var numeroDos; 
	numeroDos= document.getElementById('numeroDos').value;
    numeroDos = parseInt(numeroDos);
    
    var dividir; 
    dividir = numeroUno / numeroDos;

    alert(dividir) 
}

