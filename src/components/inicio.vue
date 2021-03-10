<template>

    <v-container>
        <v-container>
            <Carrucel />
        </v-container>


      <template>
        <v-container>
            <v-card-title> Sección Plataforma </v-card-title><br>
        </v-container>
      </template>

      <template>
        <v-container>
            <v-card-title> Seccion Experiencia </v-card-title><br>
        </v-container>
      </template>

      <template>
        <v-container>
            <v-card-title> Sección Caracteristicas </v-card-title><br>
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

 export default {
  name: "App",

  components: {
    Carrucel,
    calculadora
  },
 }

</script>

<style>


</style>