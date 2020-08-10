/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	contador = 0;
	contadorMasculino = 0;
	contadorFemenino = 0;
	var promedio = 5;
	var acumuladorEdad = 0;
	var promedioTotal;
	var mujeresTemperaturaFlag = true;
	var maximoTemperaturaMujer = 0;

	while (contador > 5){

		do{
			nombre = prompt("Ingresar nombre completo");
		}while(nombre == false );

		do{
			temperatura = prompt("Ingrese su temperatura");
			temperatura = parseInt(temperatura);

		}while(temperatura < 0 && isNaN(temperatura));

		do{ 
			sexo = prompt("Ingrese su sexo: M/f ");
			if(sexo == 'M'){
				contadorMasculino++;
			}
			else {
				contadorFemenino++;
			}
				
		}while(sexo !='M' || sexo != 'F');

		do{
			edad = prompt("Ingrese su edad");
			edad = parseInt(edad);
			
		}while(edad < 0 && isNaN(edad));

	contador++;
}
//PUNTO A 
	
		console.log("Hay" + contadorMasculino + " Hombres y"
		+ contadorFemenino + " Mujeres");

// PUNTO B 
		acumuladorEdad = acumuladorEdad + edad;
		promedioTotal = acumuladorEdad / promedio; //o con contador tambien
		console.log("La edad promedio es de" + promedioTotal);
//PUNTO C 
	if(mujeresTemperaturaFlag){
		mujeresTemperaturaFlag = false;
	}

	else if (sexo == 'F' && temperatura > maximoTemperaturaMujer){
		maximoTemperaturaMujer = maximoTemperaturaMujer;
    }

	console.log ("Temperatura maxima de mujer " + maximoTemperaturaMujer);
}
