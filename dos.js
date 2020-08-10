/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  var respuesta;
  var marca;
  var precio;
  var pesoKilogramos;
  var tipo;
  var pesoTotal;
  var acumuladorPeso = 0;
  var precioMaximoLiquido;
  var liquidoMaximoFlag = true;
  var marcaMasCaraLiquido;
  var marcaMasliviana;
  var solidoLivianoFlag = true;
  var pesoMasLiviano;
  var marcaMinimoLiquido;


 do{

  do{ 
    marca = prompt("Ingrese la marca");
  
  }while(marca == false);

  do{
    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
  
  }while(precio < 0 && isNaN(precio));

  do {
    pesoKilogramos = prompt("Ingrese el precio en KG");
    pesoKilogramos = parseInt(pesoKilogramos);
    acumuladorPeso = acumuladorPeso + pesoKilogramos;

  }while( pesoKilogramos < 0 && isNaN(pesoKilogramos));

  do {
    tipo = prompt("Ingrese el tipo de producto : Solido/Liquido");

  }while(tipo == false );

  respuesta = prompt("Desea agregar otro producto? Si/No");
 }while(respuesta = "si");

//PUNTO A 
//acumuladorPeso = acumuladorpeso + pesoKilogramos
console.log("El peso total es "+ acumuladorPeso);

//PUNTO B
if(liquidoMaximoFlag = true && tipo == "Liquido"){
  liquidoMaximoFlag = false;
  precio = liquidoMaximoFlag;
  marcaMasCaraLiquido = marca;

} else if(precio > liquidoMaximoFlag){
  liquidoMaximoFlag = precio;
  marcaMasCaraLiquido = marca;
} console.log ("El maximo " + marcaMasCaraLiquido);

//PUNTO C 
if(solidoLivianoFlag = true && tipo == "Solido"){
  solidoLivianoFlag = false;
  pesoMasLiviano = pesoKilogramos;
  marcaMinimoLiquido = marca;
}else if (pesoKilogramos < pesoMasLiviano){
  pesoMasLiviano = pesoKilogramos;
  marcaMasliviana = marca;
}console.log("la marca de el solido mas liviano es" + marcaMasliviana);

}



