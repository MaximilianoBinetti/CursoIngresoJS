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
	var PrecioBruto;
	var PrecioUnidad;
	var PrecioFinal;
	var descuento;
	var Cantidad;
	var marca;
	var IIBB;
	var PrecioImpuesto;

	PrecioBruto = parseInt(PrecioBruto); 

	Cantidad = document.getElementById('Cantidad').value;
	
	marca = document.getElementById('Marca').value;
	
	descuento = 0; 

	PrecioUnidad = 35;

	if(Cantidad > 5)
	{
		descuento = 50
	}

	else
	{
		if(Cantidad == 5)
		{
					if(marca == "ArgentinaLuz")
					{
						descuento = 40;
					}
						else
								{
									descuento = 30;
								}
		}
		else
		{
				if ((Cantidad == 4 && marca == "ArgentinaLuz") || (marca == "FelipeLamparas")) 
				{
					descuento= 25;


				}
				else 
				{
					descuento = 20;
				}
	    }

	   
	    
	    if(Cantidad == 3)
	    {
	    	if(marca == "ArgentinaLuz")
	    	{
	    		descuento = 15;
	    	}
	    	else 
	    			{
	    				if(marca =="FelipeLamparas")
	    				{
	    					descuento = 10;
	    				}
	    				else 
	    				{
	    					descuento = 5
	    				}
	    			}
	    
	    
	    }


	 
	
	    
		
	}
	IIBB = 10;
	
  	PrecioBruto = PrecioUnidad * Cantidad;
	PrecioFinal = PrecioBruto - PrecioBruto * descuento /100;
	document.getElementById('precioDescuento').value = PrecioFinal;
	PrecioImpuesto = PrecioFinal+PrecioFinal * IIBB /100;

	if( descuento > 1 && PrecioFinal > 120)
	{
		
		alert("IIBB USTED PAGÓ " + 	PrecioImpuesto);
	}

}
