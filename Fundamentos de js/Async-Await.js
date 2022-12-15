// fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then( res => res.json())
//     .then (data => {
//         console.log(data);
//         console.log(data.results);

//         data.results.forEach(element => {
//             console.log(element.name);
//         });
//         /*forEach para recorrer el array de objetos, var element las almacena y recorre una por una*/
//     })
//     .catch(error => console.log)

//Async await/nos ahorra código mas que el .then
//Nota el .then no quiere decir que este desactualizado
//Función que se comporta de manera asincrona/Devuelve un objeto AsyncFuntion

//para utilizar async, se debe de poner antes de la función de flecha
const obtenerPokemones = async() => {
    try {
        const  res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json()
    } catch (error) {
        console.log(error)
    }
}

//Await funciona siempre y cuando este dentro de una función async