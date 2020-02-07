/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  var sueldo;
  var porcentaje;
  var aumento;
  var resultado; 

  sueldo = document.getElementById('sueldo').value;
  sueldo = parseInt(sueldo);

  porcentaje = 10;
  porcentaje = parseInt(porcentaje);

  aumento = sueldo * porcentaje /100;

  resultado = sueldo + aumento;
  document.getElementById('resultado').value = resultado; //en este caso para que figure en pantalla resultado tiene que ponerse al final de value

 

	
}
