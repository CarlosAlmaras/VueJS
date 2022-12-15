console.log("objetos")
//Objetos - Declaración

//Los valores aceptan cualquier tipo de valor, inculso arrays u otro objeto, funciones, etc
const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true,
    razas: ["peludo", "negro", "blanco"]
};
/*
nombre y edad - Propiedad
'Carlos' y 10 - Valor
Si quieres agregar otra propiedad las separamos con una coma
*/
console.log(mascota);//accedes a todas las propiedades del objeto
console.log(mascota.edad);//Acceder solo a una propiedad del objeto
console.log(mascota.nombre);
//Agregar mas propiedades
mascota.id = 1;
console.log(mascota);
console.log(mascota.id);

//Acceder al array
console.log(mascota.razas)//todas
console.log(mascota.razas[0])//uno-