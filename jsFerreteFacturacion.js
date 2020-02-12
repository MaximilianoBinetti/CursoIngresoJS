/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var a ;
	var b ;
	var c ;
    var suma; 

	a = document.getElementById('PrecioUno').value;
	a = parseInt(a);

	
	b = document.getElementById('PrecioDos').value;
	b = parseInt(b);
	
	c = document.getElementById('PrecioTres').value;
	c = parseInt(c);

	suma = a + b + c 

	console.log ("La suma es de  "  + suma);

	alert("La suma es de  " +  suma);


}
function Promedio () 
{
	var a ;
	var b ;
	var c ;
    var promedio; 

	a = document.getElementById('PrecioUno').value;
	a = parseInt(a);

	
	b = document.getElementById('PrecioDos').value;
	b = parseInt(b);
	
	c = document.getElementById('PrecioTres').value;
	c = parseInt(c);

	promedio = a % b % c 

	console.log ("El promedio es de  "  + promedio);

	alert("El promedio es de  " +  promedio);
}
function PrecioFinal () 
{
	var a ;
	var b ;
	var c ;
    var IVA;
    var Precio;
    var PrecioFinal;


	a = document.getElementById('PrecioUno').value;
	a = parseInt(a);

	
	b = document.getElementById('PrecioDos').value;
	b = parseInt(b);
	
	c = document.getElementById('PrecioTres').value;
	c = parseInt(c);

    IVA = 21;
    IVA	= parseInt(IVA);
	
	Precio = ((a + b + c) * IVA) / 100; 
    Precio = parseInt(Precio);
    PrecioFinal = a + b + c + Precio;

    console.log ("El precio final es de  "  +  PrecioFinal);

    alert("El precio final es de  "  +  PrecioFinal);

}