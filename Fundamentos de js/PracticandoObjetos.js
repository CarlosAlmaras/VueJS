const web = {
    nombre: 'bluuweb',
    links: {
        enlace: 'www.bluuweb.cl'
    },
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/bluuweb',
            nombre: 'bluuweb yt'
        },
        facebook: {
            enlace: 'facebook.com/bluuweb',
            nombre: 'bluuweb fb'
        }
    }
};

console.log(web.redesSociales.youtube.enlace);
const enlaceYT = web.redesSociales.youtube.enlace;
console.log(enlaceYT)

//Despues del igual se colocá el objeto a destruir,
//El objeto que queremos destuir es youtube, por lo tanto se encuentra en: 
const {enlace, nombre} = web.redesSociales.youtube;
console.log(enlace);
console.log(nombre);