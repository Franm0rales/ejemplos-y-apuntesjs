//Funciones( nombre de la funcion, lista de argumentos entre parentesis con comas, sentencia {})

function mensaje(){
     return "Mensaje como devolución de la función ";
}
var msj = mensaje();
console.log(msj);
 //Argumentos de una funcion
 
function sumar(a,b ,c){
    return a + b + c;

}

var result = sumar(4,5,8);
console.log(result);
//Tambien se puede hacer argumentos opcionales
function sumar(a,b ,c=3){
    return a + b + c;

}

var result = sumar(4,5,8);
var result1 = sumar(3,7);
console.log(result);
console.log(result1);

//funciones como expresiones o anonimas
var sumar = function (a,b ,c=3){
    return a + b + c;

}

var result = sumar(4,5,8);
var result1 = sumar(3,7);
console.log(result);
console.log(result1);
