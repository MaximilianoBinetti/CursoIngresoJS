function mostrar()
{
	var edad
	var sexo
	var nota
	var promedio
	var varonesA
	var promedioM

	
	while(isNaN(edad))
	{
		edad = prompt("por favor ingrese la edad");
		edad = parseInt(edad);
	}

	while(edad < 0  || edad > 110)
	{
		edad = prompt("por favor ingrese una edad correcta")
		edad = parseInt(edad);
	}


	
	sexo = prompt("Por favor ingrese su sexo");
	
	while(!(sexo == "f" || sexo == "m"))
	{
		sexo = prompt("por favor ingrese f o m");

	}

	
	nota = prompt("Por favor ingrese su nota");

	while(isNaN(nota))
	{
		nota = prompt("Por favor ingrese un valor numérico")
	}
	while(nota < 0 || nota > 10)
	{
		nota = prompt("por favor ingrese una nota correcta del 1 al 10");
	}

	if(sexo == m && nota > 5)
	{
		
	}



}

