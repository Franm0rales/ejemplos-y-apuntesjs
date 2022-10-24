//Uso de variables
/*var nombre = 'Grover';
console.log(nombre);
console.log(typeof(nombre));

var edad = 34;
console.log(edad);
console.log(typeof(edad));

edad = 'Cinco';
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);

puestoDeTrabajo = null;
console.log(puestoDeTrabajo);
**********************************/

/*************
 * Operadores matemáticos +, -, *, /
 */

 /*var edadAna, edadMaria, diferenciaEdad;
 var sumaEdades, yearAna, yearMaria, yearActual;

 edadAna = 34;
 edadMaria = 28;
 yearActual = 2019;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana ' + yearAna);
console.log('Año en que nació María ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2)*/

/****
 * Operadores Lógicos, unarios y de asignación
 */
//Lógicos < > <= >= ==
var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

//Unarios, ++Incremento, --Decremento
//edadAna++;
console.log(++edadAna);
console.log(edadAna);

//Asignación, +=, -=, *=, /=, %=
var a = 12;
var b = 5;

var c = a % 5; //Residuo o resto de una división
console.log(c);
a += b;
console.log(a);

//sentencia if...else

var nombre = "Fran";
var casado = false;

if(casado == true){ //primero evalua esta condicion si es falsa ejecuta el else
console.log ( nombre + " casado ");
} else { console.log(nombre + " soltero ")}

//sentencias if anidadas
//sentencias logica
   //and(&&) true si todo es true
   //or() tue si uno es true
   //NOT (!) invierte true/false

var nombre = "Fran";
var edad = 8;

//edad <12 es un niño.
//edad >11, es < 18, es un adolescente.
//edad >17, es < 60, es un adulto.
//edad >60 es un Anciano.

if (edad < 12){
    console.log(nombre + " es un niño.");

} else if((edad > 11) && (edad < 18)){
    console.log(nombre + " es un adolescente.");
}else if((edad > 17) && (edad < 60)){

    console.log(nombre + " es un adulto.");
}else{
    console.log(nombre + " es un Anciano.");
}

//sentencia Switch(evaluar el valor de una variable, valores fijos)

var mes = 1;
switch(mes){
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
        default:
        console.log("mes no encontrado.");
   
    }

//Sentencias For(condicionales)
     //condicion en el centro
for( var i=1; i<=10; i++ ){
    console.log(i);}

//sentencia While, Do While

var i = 10;
while (i >= 1){
    console.log(i);
    i --;
}

// sentencia Do..While(se va a ejecutar al menos una vez)
var i = 11;
do{
    console.log(i);
    i++;
}while (i <= 10);
    console.log(i);




