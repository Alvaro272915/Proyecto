

// Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas
let litros = 1 ;
let centilitros = 100 ;
let decilitros = 10 ;
let galones = 0.219969 ;
let onzas = 33.814 ;
let resultado = 0 ; 

// Convertir Litros en Centilitros
resultado = litros * centilitros;
console.log('Litros en Centilitros : ' + resultado) ;

// Convertir Litros en Decilitros
resultado = litros * decilitros ;
console.log('Litros en Decilitros : ' + resultado) ;

// Convertir Litros en Galones
resultado = litros * galones ;
console.log('Litros en Galones : ' + resultado) ;

// Convertir Litros en Onzas
resultado = litros * onzas ;
console.log('Litros en Centilitros : ' + resultado) ;




//Realizar el algoritmo que realice las 4 operaciones básicas para dos números de entrada.
let operador1 = parseInt(prompt("Ingrese el Primero Operador")) ;
let operador2 = parseInt(prompt("Ingrese el Segundo Operador")) ;

// Multiplicacion
resultado = operador1 * operador2
console.log('Operación Multiplicacion : ' + resultado) ;
// Suma
resultado = (operador1 + operador2)
console.log('Operación Suma : ' + resultado) ;
// Resta
resultado = operador1 - operador2
console.log('Operación Resta : ' + resultado) ;
// Resta
resultado = operador1 / operador2
console.log('Operación Dicisión : ' + resultado) ;


//Realizar el algoritmo que convierta grados centígrados en Fahrenheit y viceversa.
let centigrados = 0 ;
let fahrenheit = 32 ;

resultado = (centigrados * 9/5 ) + 32 ;
console.log('Centigrados a Fahrenheit : ' + resultado) ;

resultado = (fahrenheit - 32) * 5/9 ;
console.log('Fahrenheit a Centigrados : ' + resultado) ;


