/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{  
	var CL;
	var precioBruto;
	var PrecioFinal;
	var marca;
	

	CL = document.getElementById('Cantidad').value;
	CL = parseInt(CL);

	precioBruto = CL * 35;

	if (CL > 5) //cantidad mayor a 5

	{

		PrecioFinal = precioBruto - precioBruto * 50 / 100;
		document.getElementById('precioDescuento').value = PrecioFinal;
	}
	else 
	{
		if(CL == 5) //cantidad igual a 5
		{
			if(marca == "ArgentinaLuz")
			{
				PrecioFinal = precioBruto - precioBruto * 40 / 100;
				document.getElementById('precioDescuento').value = PrecioFinal;

				}
				else 
				{
					if(marca != "ArgentinaLuz")
					{
						PrecioFinal = precioBruto - precioBruto * 30 /100;
						document.getElementById('precioDescuento').value = PrecioFinal;
					}

				}
			}

    }
 }
