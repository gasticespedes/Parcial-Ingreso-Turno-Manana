/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var respuesta;
	var titular;
	var lugar;
	var temporada;
	var cantidadPersonasQueViajan;
	var lugarMasElegido;
	var contadorBariloche = 0;
	var contadorSalta = 0;
	var contadorCataratas = 0;
	var titularMaxPasajeros = 0;
	var maxPasajeros = 0;
	var titularPasajerosFlag = true;
	var contadorViajes = 0;
	var promedioPersonasPorViajeEnInvierno;
	var contadorViajesInvierno = 0;
	var acumuladorPersonasQueViajan = 0;
	do{

		do{
			titular = prompt("Ingrese un titular");
		}while (titular == false);

		do{
			lugar = prompt("Ingrese destino : Bariloche/Cataratas/Salta");
			
			if(lugar == "Bariloche "){
					contadorBariloche++;
				} else if (lugar == "Cataratas"){
					contadorCataratas++;
				}else {
					contadorSalta++;
				}
		
		}while (lugar != "Bariloche " || lugar != "Cataratas" 
		|| lugar != "Salta");

		do{
			temporada = prompt("Ingrese temporada en la que deseea viajar "+
			" Otoño/Invierno/Verano/Primavera");
			if (temporada == "Invierno"){
				contadorViajesInvierno++;
			}

		}while(temporada != "Otoño" || temporada != "Invierno" 
		|| temporada != "Verano" || temporada != "Primavera");

		do{
			cantidadPersonasQueViajan = prompt("Ingrese la cantidad de viajeros");
			cantidadPersonasQueViajan = parseInt(cantidadPersonasQueViajan);
			acumuladorPersonasQueViajan = acumuladorPersonasQueViajan + cantidadPersonasQueViajan;

		}while(cantidadPersonasQueViajan < 0 && isNaN(cantidadPersonasQueViajan));

		contadorViajes++;

	respuesta = prompt("Desea agregar otro destino ? Si/No");

	}while(respuesta == "Si");


	// PUNTO A
	if(contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
		console.log("el lugar mas visitado es Bariloche");
	}else if(contadorCataratas > contadorSalta){
		console.log("el lugar mas visitado es Cataratas")
	} else {
		console.log ("el lugar mas visitado es Salta");
	}
//PUNTO B
 if(titularPasajerosFlag == true ){
	 titularPasajerosFlag == false 
	 titularMaxPasajeros = titular;
	 maxPasajeros = cantidadPersonasQueViajan;
	 }else if (cantidadPersonasQueViajan > maxPasajeros){
		 maxPasajeros = cantidadPersonasQueViajan;
		 titularMaxPasajeros = titular
	 }
	 console.log("El titular que mas lleva es" + titular);

	 // PUNTO C 
promedioPersonasPorViajeEnInvierno = acumuladorPersonasQueViajan / contadorViajesInvierno;
console.log("El promedio de las personas que viajan en invierno es" + promedioPersonasPorViajeEnInvierno);

}
