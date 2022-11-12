// tipos de variables: var, let y const
var example1 = 5;
let example2 = 10
const example3 = 15;

function myFunction(){
    var ef1 = 1;
    let ef2 = 2;
    const ef3 = 3;
    
    example1 = 'a';
    example2 = 'b';
    // example3 = 'c'; tira error dado que no se puede modificar una variable const
    console.log('example1', example1);
    console.log('example2', example2);
    console.log('example3', example3);
};
//console.log('ef1', ef1); tira error is not defined
//console.log('ef2', ef2);
//console.log('ef3', ef3);

myFunction();





// Tipos de datos de las variables
const example1 = 'Hello World'; // string ''
const example2 = 'a'; // char ''
const example3 = 10; // number null
const example4 = { firstname: 'Gino', lastname: 'Ligorria' } //Object {}
const example5 = [10, 20, 'a']; //Arrays []
const example6 = true // boolean true/false
const example7 = myFunction(); //function



console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);
console.log(example5);
console.log(example6);
console.log(example7);

function myFunction(){
    
    return 'a';
    
}
const valor = myFunction();
console.log(valor);


function suma(){
    let b = 5;
    let a = 10;
    return (a + b);
}
 console.log(suma());
 
 function resta(){
    let b = 5;
    let a = 10;
    return (a - b);
}
 console.log(resta());
 
 function sumaDiferente(a= 10,b= 10){
    return a + b;
 }
 console.log(sumaDiferente());