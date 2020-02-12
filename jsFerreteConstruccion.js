/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   var l;  
   var a;
   var Rectangulo;
   var alambre;


   l = document.getElementById('Largo').value;
   l = parseInt(l);

   a = document.getElementById('Ancho').value;
   a = parseInt(a);

   Rectangulo = 2 * (a + l);
 
   alambre = Rectangulo * 3

   console.log("Se necesitan  " + alambre  + "  metros de alambre" );

   alert("Se necesitan  " + alambre  + "  metros de alambre");



}
function Circulo () 
{

  var circulo;
	var radio;	
	var π
	var alambre; 
    
  radio = document.getElementById('Radio').value;
	radio = parseInt(radio);


	circulo = 2 * 3,14 * radio;
	circulo = parseInt(circulo);

	alambre = circulo * 3;

	console.log("Se necesitan  " + alambre  + "  metros de alambre" );

  alert("Se necesitan  " + alambre  + "  metros de alambre");


}
function Materiales () 
{
	  var cal;
	  var cemento; 
	  var b;  
    var h;
    var AreaRectangulo;
    var Materiales;


    b = document.getElementById('Largo').value;
    b = parseInt(b);

    h = document.getElementById('Ancho').value;
    h = parseInt(h);

    AreaRectangulo = b * h;
 
    cal = AreaRectangulo * 2;

    cemento = AreaRectangulo * 3; 

    console.log("Se necesitan  "  +  cal   + "  bolsas de cal y  " + cemento + "  bolsas de cemento");
    
    alert("Se necesitan  "  +  cal   + "  bolsas de cal y  " + cemento + "  bolsas de cemento")
 
}