//variables
//ya no se usa asi 
//se puede usar o no el punto y coma al final de la sentencia
//pero con edwaur si lo vamos a usar
//es javascript no es obligatorio indicar el tipo de variable
var producto = 'sensor de calor';

//no se puede iniciar una variable con guion
//var -sensor = 'sensor-01';

//no se puede iniciar con numero
//var 1sensor = 'sensor-02';

//si esta permitido escribir con guion al piso
var _sensor = 'sensor-03';

//==================================================
//                CONVENCION DE NOMBRES 
//==================================================

//Camel case
//UpperCamelCase  =>  Se nombran las clases 
//LowerCamelCase  =>  Se usa JS para nombrar las variables

//snake_case      =>  Se usa mucho en python

//

console.log(producto);

// Crear una variable con las tres formas posibles

var sensor = "sensor de lluvia";
let sensorUno = "sensor de lluvia";
const sensorDos = "sensor de lluvia";

console.log(sensor);
console.log(sensorUno);
console.log(sensorDos);

//crear una variable constante 

const maxSize = 1024;
// Le voy a cambiar el valor 
//maxSize = 123456;

// ejemplo con let
let userName = "ale";

console.log(userName);

// ejemplo con var 
var nameDos = 'ale';
var nameDos = 'dani';

console.log(nameDos);

//error 
let name = 'ale';
console.log(name);


