<template>

    <v-container>
        <v-container>
            <Carrucel />
        </v-container>


      <template>
        <v-container>
            <SeccionPlataforma />
        </v-container>
      </template>

      <template>
        <v-container>
            <SeccionExperiencia />
        </v-container>
      </template>

      <template>
        <v-container>
            <SeccionCaracteristicas />
        </v-container>
      </template>

      <template>
          <v-container>
            <calculadora />
          </v-container>
      </template>

    </v-container>
</template>

<script>
 import Carrucel from  '../components/Carrucel.vue';
 import calculadora from '../components/calculadora.vue';
 import SeccionPlataforma from '../components/SeccionPlataforma.vue';
 import SeccionExperiencia from '../components/SeccionExperiencia.vue';
import SeccionCaracteristicas from '../components/SeccionCaracteristicas.vue';

 export default {
  name: "App",

  components: {
    Carrucel,
    calculadora,
    SeccionPlataforma,
    SeccionExperiencia,
    SeccionCaracteristicas
  },
 }

</script>

<style>


</style>