/*Antes se utilizaba var */
//Declaracion de variable
var edad = 10
//reasignación de var/se hace como si fueras a declarar la var
var edad = 20 
console.log(edad) // 20

//declaración de var(No deja declara 2 veces la var)
let edad = 10
//asi no se hace la reasignación
let edad = 20
console.log(edad) //da error

// solución
let edad = 10
//asi modificamos su valor con let
//asi se reasigna un valor con let
edad = 20
console.log(edad) // 20


const age = 10
edad = 20//error
//En las constantes no podemos modificar su valor

/*********************************************************************/
var edad = 10
if(true){
    var edad = 20
    console.log(edad) // 20
}
console.log(edad) // 20

/*Scope*/

let edad = 10 /*Varieble Gobal(la puedes utilizar en cualquier función/if/etc)*/

    if(true){
        let edad = 20 //Variable local(solo se puede utilizar dentro del if/función/etc)
        //Solo vive aqui
        console.log(edad) // 20
    }
console.log(edad) // 10

/*************************************************************************************/
const edad = 10
const edad = 20 // SyntaxError

const edad = 10
edad = 20 // Error: "edad" is read-only

const edad = 10
    if(true){
        const edad = 20
        console.log(edad) // 20
    }
console.log(edad) // 10
/*****************************************************************************************/
var edades = [10,20,30]
var edades = [10,20,30,40]
console.log(edades) //[10,20,30,40]

let edades = [10,20,30]
edades = [10,20,30,40]
console.log(edades)//[10,20,30,40]

const edades = [10,20,30]
edades = [10,20,30,40]
console.log(edades)//Error: "edad" is read-only

const edades = [10,20,30]
edades.push(40)
console.log(edades)//[10,20,30,40]

const persona = {
  nombre: 'juanito',
  edad: 20
}
console.log(persona)//{nombre: 'juanito', edad:20}

persona.edad = 21
persona.pais = 'México'

console.log(persona)//{nombre: 'juanito', edad:21, pais: 'México'}