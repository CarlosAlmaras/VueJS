// const numero = () => {
//     console.log(10);
// }

// numero();

const numero = (num) => {
    return 'el numero es: ' + num;//concatenamos
}

const resultado = numero(10);
console.log(resultado);

//Para visualizar mejor(Mezclar string con JS, dentro de un mensaje utilizaremos template string)
const numero2 = (num1, num2) => (
    `el numero es: ${num1 + num2}`);//Comillas invertidas, dentro de las {} podemos utilizar código de JS()


const resultado2 = numero2(10, 20);
console.log(resultado2);


// const numero2 = (num1, num2) => {
//     return `el numero es: ${num1 + num2}`;//Comillas invertidas, dentro de las {} podemos utilizar código de JS()
// }

// const resultado2 = numero2(10, 20);
// console.log(resultado2);
