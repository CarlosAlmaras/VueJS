<script setup>
import {ref, computed} from 'vue'

const arrayColores = ['red', 'green', 'yellow'];
const name = 'vue dinamico :O!!!s';


/*se puede utilizar const, las const tienen mas performance que let, el maestro utiliza mas const porque tiene un grado
mas alto de optimización */
const counter = ref(0);
/*ref() puede recibir cualquier tipo de valor */

/*Lo que habiamos hecho, era una variable que estaba en nuestro script, pero no hay nada que le indique que cuando esta 
variable  cambie nosotros tenemos que renderizar, no todo el template, sino solo el h2 y que me vaya mostrando los valores
actuales que va a tener el counter y para eso necesitamos decirle a vue, que esta esta variable es una variable reactiva*/
const increment = () => {
  // console.log('aumentar contador');
  counter.value++;
  console.log(counter);
}

const decrease = () => {
  // console.log('disminuyendo');
  counter.value--;
}
const reset = () => {
  counter.value = 0;
}

const classCounter = computed(() => {
  if(counter.value === 0){
    return 'zero';
  }
  // if(counter.value > 0){
  //   return 'positive';
  // }
  // if(counter.value < 0) {
  //   return 'negative';
  // }
  return counter.value > 0 ? "positive" : "negative";
});

const arrayfavoritos = ref([]);

const add = () => {
  arrayfavoritos.value.push(counter.value);
  // console.log(numeros.value);
}

const deshabilitarBtnAdd = computed(() => {
  //computed siempre tiene que devolver algo(info)
  const numSearch = arrayfavoritos.value.find(num => num === counter.value);
  // console.log(numSearch);
  if(numSearch === 0) return true;//el 0 siempre va a retonar false, por eso validamos.
  return numSearch ? true : false;//si existe numero devuelve true, false caso contrario
  //El find busca un elemento dentro del array, recibe cada uno de los elementos que hay en el interior

  /*Otra solución*/
  /* return numSearch || numSearch === 0;
   
  (|| quiere decir o)*/
})
</script>


<template> 

<div class="container text-center">
  <h1 :style="`color: ${arrayColores[0]}`">Hola, {{ name.toUpperCase() }}</h1>
<br/>
  <h2 :class="classCounter"> {{counter}} </h2>
  
  <div class="btn-group">
    <button @click="increment" class="btn btn-success">Aumentar</button>
    <button @click="decrease" class="btn btn-danger">Disminuir</button>
    <button @click="reset" class="btn btn-secondary">Resetear</button>
    <button @click="add" :disabled="deshabilitarBtnAdd" class="btn btn-primary">Agregar</button>
  </div>


  <ul class="list-group mt-4">
    <li class="list-group-item" v-for="(item, index) in arrayfavoritos" :key="index">{{item}}</li>
  </ul>
</div>


</template>
<!-- La etiqueta template en vue sirve para, poder renderizar todo el html, que nosotros necesitamos, 
en este caso en nuestro componente App.vue que va a ser toda nuestra app. 

En Vue Tenemos una técnica para trabajar que se llama single file componet(SFC), esta estructura
nos permite separar la lógica, la estructura(html) y los estilos en CSS.
-->



<style>
h1 {
  color: red;
}
.negative {
  color: red;
}

.positive {
  color: green;
}
.zero {
  color: peru;
}
</style>