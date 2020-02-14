function mostrar()
{
var edad;
edad = document.getElementById('edad').value;

if(edad > 17)

{
	alert("Usted es mayor de edad");
}

if (edad > 12 && edad < 18)
{
	alert("Usted es adolescente");
}

else
{
	if(edad < 13)
	{
		alert("Usted es niñ@");
    }
}


}//FIN DE LA FUNCIÓN