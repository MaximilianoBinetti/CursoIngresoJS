/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var t; 
    var c; 

	t = document.getElementById('Temperatura').value;

	c = (t -32) / 1,8;

	alert("Son  " + c +  "  grados Celsius");

}

function CentigradosFahrenheit () 
{
	var t; 
	var f;
	var c;

	t = document.getElementById('Temperatura').value;
	t = parseInt(t);

	f = (t + 1.8) + 32;
	f= parseInt(f);


	alert("Son  " +  f + "  grados Fahrenheit");
}
