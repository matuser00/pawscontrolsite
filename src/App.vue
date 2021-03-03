<template>
  <v-app>
  <v-container>
      <v-toolbar color="Disabled">

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Veterinaria</v-toolbar-title>
        <br>
          <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text  :to="{name:'Inicio'}">
            Inicio
          </v-btn>
            <v-btn text  :to="{name:'Calculadora'}">
            Calculadora
          </v-btn>
          </v-toolbar-items>  
      </v-toolbar> 
      <router-view></router-view>
  </v-container>
   
  <v-footer padless>
    <v-col class="text-center" cols="12">
     <strong> Derechos Reservados </strong>
    </v-col>
  </v-footer>


 
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  }
}
</script>
