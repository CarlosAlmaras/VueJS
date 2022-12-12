<script setup>
/*Aqui se escribe la logica*, si no hay script no se rompe nuestro sistema*/

//Interpolación de texto
const name = 'Vue dinamico :O!!!s';

//v-bind - Esta directiva permite enlazar (bindear) una variable de Vue con un atributo específico de una etiqueta HTML.
//v-bind - Lo mismo que la interpolación de datso pero en atributos.
const stylecolor = 'color: blue';

//Uso de expresiones de JS
//Las expresiones de JavaScript se puede utilizar en las plantilñas de Vue dentro de {{}}
const arrayColores = ['red', 'green', 'yellow'];
const activo = true;

const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
</script>


<template>
  <h1>Hola desde de vue!</h1>
  <h2>{{name}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h3>{{arrayColores}}</h3> <!--podemos utilizar las llaves dobles para interoretar algo en texto -->
  <h3 :style="`color: ${arrayColores[0]}`">{{arrayColores[0]}}</h3>
  <h3 :style="`color: ${arrayColores[1]}`">{{arrayColores[1]}}</h3>
  <h3 :style="`color: ${arrayColores[2]}`">{{arrayColores[2]}}</h3>
  <!--El bigote no acepta por ejemplo un if, solamente soporta expresiones de JS(acepta como algo que tenga un retorno inmediato)-->
  <!-- <h3>{{if(activo) {
    return 'estoy activo';
  }}}</h3> En lugar de eso podemos utlizar esto-->
  <h3>{{activo ? "Estoy activo" : "Estoy inactivo"}}</h3>
  
  <!-- <h2 style="color: blue">Soy azul</h2> -->
  <h2 v-bind:style="stylecolor">Soy azul</h2>
  <h2 :style="stylecolor">Soy azul</h2><!--Atajo-->


  
  <!-- V-if -->

  <!-- <p v-if="activo">Estoy activo - v-if</p> -->
  <p v-if="(activo === true)">Estoy activo - v-if</p>
  <!-- <p v-if="!activo">Estoy activo - v-if</p> -->
  <p v-else-if="(activo === false)">Estoy inactivo - v-else-if</p>
  <p v-else>Estoy indeciso - v-else</p>
  <!-- <p v-else>Estoy inactivo - v-else</p> -->
  <!--v-else para que funcione tiene que estra seguido del v-if-->
  
  <!--V-show-->
  <!--La directiva v-show se usa para mostrar o ocultar un elemento de la plantilla.
  v-show solo cambia la propiedad display CSS del elemento. este elemento aparece en el dom aunque sea false,
  ya que esta oculta, su display es none, en cambio en el if si es false, no existe el elemento -->
    <h3 v-show="!activo"> Estoy activo gracias al v-show</h3>
   
  <!-- En términos generales, v-if tiene costos de alternancia más altos mientras que v-show tiene costos de renderización inicial más altos.
   Así que prefiera v-show si necesita alternar algo con mucha frecuencia, y prefiera v-if si es poco probable que la condición cambie en el tiempo de ejecución.
  En pocas palabras, use v-show si se va estar alternando el ocultar o mostrar algo, y v-if si la condición sea con poca probailidad de que cambie
 -->

 <!--V-for-->
 <!--La directiva v-for se usa para iterar sobre una lista de elementos. Para darle a Vue una pista para que pueda rastrear la identidad de cada nodo y, por lo tanto, 
 reutilizar y reordenar los elementos existentes, debe proporcionar un atributo key único para cada elemento.-->
 {{arrayFrutas}}
</template>


<!-- La etiqueta template en vue sirve para, poder renderizar todo el html, que nosotros necesitamos, 
en este caso en nuestro componente App.vue que va a ser toda nuestra app. En Vue Tenemos una técnica para trabajar que se llama single file componet(SFC), esta estructura
nos permite separar la lógica, la estructura(html) y los estilos en CSS.

**En teoría es obligatorio el template/html, ya que pues si en el html pues no se muestra nada**
-->




<style>
  h1 {
    color: red;
  }
/*Esta etiquete nos permite escribir CSS en este componente, si no hay style no se rompe nuestro sistema*/
</style>

<!-- Interpolación de texto (bigote o llaves dobles {{}}) es una forma de insertar valores en una plantilla-->


<!-- *******
Directivas - Las directivas son atributos especiales con el prefijo v- .
El trabajo de una directiva es aplicar actualizaciones de forma reactiva al DOM
******* -->