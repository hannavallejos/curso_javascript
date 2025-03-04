console.log("FUNCIONA");
console.log(22 + 22);
console.log(true);


// linea comentada que no sale en ningn lado
/*
bloque comentado:
se puede 
comentar 
en varias
lineas */

// tiposb de datos
/* string (o cadena de texto) "se escribe entre comillas" o 'asi'
number: 172862 numero normal.
boolean: true/false  */

//palabras para crear variables: let y const (existia VAR pero ya no... el que usa VAR hay tabla)

//DECLARAR una variable ("equivalente a crearla");
let nuevaVariable //camelCase snake_case PascalCase

//ASIGNAR un valor a una nueva variable (equivalente a llenar una caja)
nuevaVariable = "valor";

console.log(nuevaVariable); 

//INICIALIZAR una variable (equivalente a las dos anteriores juntas);
 let nombreDelProfe = "lucas";
 //const edadDelProfe = 16;
//variableProhibida ="no usen VAR";


// let numeroA = 1;
// let numeroB = 2; 
// let numeroC = numeroA + numeroB;

// console.log(numeroC);

// let apellidoDelProfe = "ruiz";
// apellidoDelProfe = "ruiz montiel";


//sentencias para interaccion 
// console: console.log ( aca adentro le enviamos lo que queremos mostrar). No es correcto mostrarle al usuario la informacion a traves de console.lo. lo correcto es que solo sea de uso interno PERO para las primeras clases lo vamos a tomar como valido. 

//console: console.log(aca adentro le enviamos lo que queremos mostrar)
let numeroA = 10;
let numeroB = 2; 
let numeroC = numeroA - numeroB; 

console.log("el resultado de la resta es: " + numeroC);


// 10 menos 2 es igual a 8 
console.log("el resultado de la resta es: "+ numeroC); 

console.log (numeroA + "menos" + numeroB + "es igual a"+ numeroC); 
            //    10            2                    8 
console.log (numeroA + " - " + numeroB + " = "+ numeroC); 



// alert( lo que quiera mostrar ): alert funciona similar a console log pero la diferencia es que no necesito abrir la consola para ver una alerta. la alerta se ve sola.   
alert(numeroA + " - " + numeroB + " = "+ numeroC);

//tanto alert como console.log son los metodos de salida de informacion que vamos a utilizar POR AHORA, van a ser desterrados de esas funcionalidades. console.log va a ser nuestro mejor amigo pero solo uso interno como ya dijimos antes.


//....................................estos son maneras de que entre informacion y lo anterior son amneras de que salga informacion 
//para ingresar informacion tenemos dos sentencias: prompt y confirm

//prompt (el mensaje que quieras mostrar en el cuadro de texto)
let nombreDelUsuario = prompt("ingrese su nombre");
console.log("el usuario se llama " + mombreDelUsuario); 
//tambien se puede usar alert y ahi ya va a aparecer en una caja al usuario en la parte de arriba 
//   alert("el usuario se llama " + mombreDelUsuario); 

//confirm(mismo caso que prompt pero no da "input" sino dos botones)

let confirmar = confirm("estas seguro?"); 
console.log(confirmar); 
// en el prompt pasaria que cada cosa que escribimos no importa lo que sea ese va a ser su valor y terima ahi en cambio el cofirm es mas de true o false que es verdadero o falso 
// el confirm es confirmar si o no y listo


// final boss: tenemos que pedirle al usuario que ingrese dos numeros para sumarlos y mostrarle por alert el resultado de la suma. no solo el resultado sino con un texto mas acorde.

/* analisis: 
neceisto si o si usar algo para entrada de datos( prompt)
logica JS para sumarlos en una variable 
mostrar el mensaje: hay que aramar concatenando un mensaje acorde 
*/

// como prompt siempre nos devuelve un string, neceistamso que los datos seran de tipo numerico. sino, los va a concatenar en vez de sumar. para eso tenemos parseint()
//ejemplo: parseint("22")---> 22 tipo numerico 
let primerNumero = parseInt(prompt("ingrese el primer sumando")); 
let segundoNumero = parseInt(("ingrese el segundo nombre sumando")); 
//parseInt hizo que los numeros den el total que tenian que dar y no fucionar los numeros y escribirlos juntos  nomas 


let suma = primerNumero + segundoNumero; 
let mensajeFinal = "la suma netre" + primerNumero + "y" + segundoNumero + "es" + suma; 
alert ( mensajeFinal); 
//tarea para la casa: solicitarle al usuario nombre, apellido, edad y hobbie. mostrarlo en consola o en alerta

