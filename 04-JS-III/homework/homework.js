// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var cont;
  cont=array[0];
  return cont;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var answ;
  answ=array[array.length-1];
  return answ;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var answ= array.length;
  return answ;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var newArray=[];
  var bubble,lngth;
  lngth=array.length;
  for(var i=0;i<lngth;i++){
    bubble=array[i]+1;
      newArray.push(bubble);
  }
   return newArray;
  }


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var lngth,answ='';
  lngth = palabras.length;
  for(var i=0;i<lngth;i++)
  {
    switch (i)
    {
      case lngth-1 :
        answ+= palabras[i];
        break;
        default:
          answ += palabras[i]+' ';
    }
  }

  return answ;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var lngth,search;
  lngth=array.length;
  if(lngth==0){
    search=false;
  }
  else
  {
  for(i=0;i<lngth;i++){
     if(array[i]==elemento)
     {
       search=true;
       break;
     }
     else
     {
       search=false;
     }
  }
}
  return search;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var addtn=0,lngth;
  lngth=numeros.length;
  for(var i=0;i<lngth;i++){
    addtn+=numeros[i];
  }
  return addtn;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var addtn=0,lngth,prom;
  lngth=resultadosTest.length;
  for(var i=0;i<lngth;i++){
    addtn+=resultadosTest[i];
  }
  prom=addtn/(lngth);
  return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var lngth,bigger=null,bubble;
  lngth=numeros.length;
  for(var i =0;i<lngth;i++){
    bubble=numeros[i];
    if(bubble>numeros[i+1]&&bubble>bigger){
      bigger=bubble;
    }
  }
  return bigger;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var lngth,mult=1;
  lngth=arguments.length;
  var argmts =[].slice.call(arguments);
 switch (lngth) {
   case 0:
     mult=0;
     break;
   case 1:
     mult=lngth;  
     break
  default:
     for(var i=0;i<lngth;i++){
       mult=mult*argmts[i];
     }
     break;
 }
 return mult;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cont=0,lngth,comp;
  lngth=arreglo.length;
 for(var i=0;i<lngth;i++){
    comp= arreglo[i];
    if(comp>18){
      cont+=1;
    }
 }
 return cont;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var answ;
  switch (numeroDeDia)
  {
        case 1 :
          answ="Es fin de semana";
          break;
        case 7 :
          answ="Es fin de semana";
          break;
        default:
          answ="Es dia Laboral";
          break;
  }
  return answ;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
   var str= n.toString(),answ;
   if(str.indexOf(9)==0){
     answ=true;
   }
   else{
     answ=false;
   }
   return answ;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var comp,bubble,bubble2=null,lngth;
  lngth = arreglo.length;
  for(var i=0;i<lngth;i++){
    bubble=arreglo[i];
    if(bubble!=arreglo[i+1]){
      comp=false;
      break;
    }
    else{
         if( bubble2==null && bubble==arreglo[i+1]){
           bubble2=bubble;
         }
    }
  }
  if(bubble==bubble2){
    comp = true;
  }
  return comp;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
   var lngth;
   var month=["Enero","Marzo","Noviembre"];
   var newArray=[];
   var miss;
   lngth = array.length;
   for(var i=0;i<lngth;i++){
      for(var j=0;j<3;j++){
        if(array[i]==month[j]){
              newArray.push(month[j]);
        }
      }
   }
   if(newArray.length<month.length){
     miss="No se encontraron los meses pedidos";
   }
   else{
     miss=newArray;
   }
   return miss;
}



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var lngth,bubble;
  var newArray=[];
  lngth=array.length;
  for(var i=0;i<lngth;i++){
    bubble=array[i];
    if(bubble>100){
      newArray.push(bubble);
    }
  }
  return newArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var newArray=[];
  var add=0,iterac=10;
  for(var i=0;i<iterac;i++){
    if(i==0){
      add=add+numero+2;
    }
    else{
      add=numero+(i+1)*2;
    }
    if(add==i){
      return add="Se interrumpió la ejecución";
      break;
    }
     newArray.push((add));
  }

return newArray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var newArray=[];
  var add;
  var iterac=9;
  for(var i=0;i<iterac;i++){
    if( (i!=4) && (i==0)){
      add=numero+2;
      newArray.push(add);
      continue;
    }
    else
    {
      if((i!=4)){
        add=numero+(i+1)*2;
        newArray.push(add);
        continue;
      }
      if(i==8){
        newArray.push((numero+(9)*2))
        break;
      }
      else
      {
        newArray.push((numero+(5)*2))
        continue;
      }
    } 
  }
  return newArray;
}





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
