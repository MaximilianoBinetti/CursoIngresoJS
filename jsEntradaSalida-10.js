/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var descuento; 
	var resultado; 
 
    importe = document.getElementById('importe').value;
    importe = parseInt(importe);

    porcentaje = 25;


    descuento = importe * porcentaje / 100;
    descuento = parseInt(descuento);
   
    resultado = importe - descuento 
    
    document.getElementById('resultado').value = resultado;
    
 
}