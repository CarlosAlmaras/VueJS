//funciones

//Declaración
function sumar () {
    console.log(10)
}

//llamada a la función/Ejecutamos o llamamos a la función
sumar()//10

function sumar (num) {//parámetro
    console.log(num)//10/consola
}
sumar(10)//argumento
/********************************************************************/

//Arrow function/Con estas se reducen bastante el código

const sumarDos = () => {
    console.log(20)//20/consola
}

sumarDos()

////////////////////////////////////////////////////////////////////////
const sumarDos = (num) => {
    console.log(num)//20
}

sumarDos(20)

/*Cuando solamente tienes 1 solo parámetro, puedes omitir los paréntesis*/
const sumarDos = num => {
    console.log(num)//20
}

sumarDos(20)
/*si hay mas de 1 si se requiere los paréntesis*/
const sumarDos = (num1, num2) => {
    return (num1 + num2)
}

const resultado = sumarDos(20, 10)
console.log(resultado)//30

//El código de arriba puede ser escrito asi :
const sumarDos = (num1, num2) => (num1 + num2)
const resultado = sumarDos(20, 10)
console.log(resultado)//30


//Si no hay parámetros, siempre tenemos que utilizar los paréntesis
//Como estamos retornando, podemos omitirnos el return y las llaves
// const mensaje = (nombre) => {
//     return 'Hola soy Carlos ' + nombre;//cancatenamos 
// }
const mensaje = (nombre) => ('Hola soy Carlos ' + nombre);//cancatenamos 
//Podemos agregar paréntesis como recordatorio de que eso se va a retornar

const resultado2 = mensaje('Adrián');
console.log(resultado2);


const sumarTres = (num = 1) => {
    console.log(num + 3);//12
}
sumarTres(9)//Si no le pasamos nada, regresa NaN(Not at number), corregimos eso con num = 1.
//Cuando le pasamos un parametro, la asignación(num = 1) se omite.

//el num = 1, sirve como valor por default si el usuario no manda nada