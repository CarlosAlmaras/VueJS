//Objeto
const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true,
    razas: ["peludo", "negro", "blanco"]
};

console.log(mascota.nombre);

//guardamos valor de propiedad en una constante
const nombreMascota = mascota.nombre;
console.log(nombreMascota); 
//esto es valido, pero aparecio lo que se conoce como:

//Destructuring Objects
//dentro de las llaves escribimos la propiedad que quqeremos
//la const le asignamos el objeto


//Accedemos a la propiedad sin utilizar la sintaxis de punto, ni crear una nueva var
//Con destructuring, accedemos al valor de una propiedad y creamos una variable al mismo tiempo
const {edad, nombre} = mascota;
console.log(edad);
console.log(nombre);