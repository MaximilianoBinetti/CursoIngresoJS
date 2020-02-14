function mostrar()
{
	var nota
	nota = Math.floor(Math.random()* 10) + 1;
  	nota = parseInt(nota);

	if(nota < 4)
	{
		alert("Vamos, la proxima se puede");
	}

	else
	{
		if(nota > 3 && nota < 8)
		{
			alert("Aprobado");
		}
		else
		{
			alert("EXCELENTE!");
		}
	}

	console.log(nota);
	

}//FIN DE LA FUNCIÓN