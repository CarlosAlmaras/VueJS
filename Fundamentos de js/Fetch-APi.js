/*La API Fetch proporciona una interfaz JS, para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas */

/*Una de sus gracias es que podemos consumir una API.
Una API generalmente es una respuesta del servidor, que nos va estar entregando datos, que nosotros podemos cosnsumir en nuestro 
sitio web. API´s publicas son las que no nos piden permiso para consumirla, y tambien las privadas que les pedirán claves de acceso,
donde tendrás que registrarse y ellas les devolverán una API Key- temas mas avanzados*/

/*En este ejemplo utilizaremos Poke API, nos dará respues de muchos pokemones de los juegos,  https://pokeapi.co/api/v2/
Si nosotros consumimos este enlace, deberiamos tener la misma respuesta que vemos cuando visitamos en la pag, en formato.json o de tipo objetos.*/

//También puede leer imágenes, archivos json que estan locales en nuestro sistema, etc.
//Como utilizaremos Vue, generalmente lo tulizaremos para consumir APIS
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( res => res.json())
    .then (data => {
        console.log(data);
        console.log(data.results);

        data.results.forEach(element => {
            console.log(element.name);
        });
        /*forEach para recorrer el array de objetos, var element las almacena y recorre una por una*/
    })
    .catch(error => console.log)


/*
Para ver los pokemos ocupamos el .then(), este esperá una promesa.
Para explicar las promesas en JS, empecemos desde el principio,
el fetch('https://pokeapi.co/api/v2/pokemon/') espera una promesa, osea nosotros estamos esperando 
que a url nos devuelva los datos (los pokemons), si vemos en la página donde esta todo el objeto, vemos que 
todo eso esta en formato json, un objeto en formato json, porque?, por que tiene las comillas en las propiedades,
nosotros tenemos que transformar esa información o decirle a fetch que los datos viene en formato json, osea que 
nuestra promesa nos devolverá datos pero en formato json. Por eso utilizamos el .then().
Le pasamos una función de flecha:
.then(() => {
        
    })
en los parentesis vamos a recibir la respuesta, la respuesta de la url, le decimos que la respuesta la retorne en
formato json
*/

/*Dentro del .then támbien existe lo que se conoce como catch, que este sirve para cuando no funciona el
.then, atrapamos el error para ver que es lo que pasa*/