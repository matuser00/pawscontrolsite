<template>
    <v-container>
      <v-carousel hide-delimiters cycle height="400" show-arrows-on-hover>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
            <v-card class="px-0 text-center"  color="Disabled" >
              {{ item.titulo }}     
            </v-card>
            <v-subheader   >
                <div class='titulo' >
                  {{ item.titulo }} 
               </div>   
            </v-subheader>
            <v-container >
                <v-footer absolute >
                  <v-card color="Disabled">{{ item.descripcion }} </v-card>
                </v-footer>
            </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-container>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://image.freepik.com/foto-gratis/perro-siendo-revisado-veterinario-tienda-mascotas_23-2148872561.jpg',
            titulo: 'PetMascota',
            descripcion: 'Descripcion del servicio'
          },
          {
            src: 'https://image.freepik.com/vector-gratis/hospital-moderno-perros-gatos_74855-7620.jpg',
            titulo: 'Servicios',
            descripcion: 'Descripcion del servicio en general'
          },
          {
            src: 'https://image.freepik.com/foto-gratis/mujer-afroamericana-positiva-sostiene-perro-miniatura-obediente-manos-pasa-dia-libre-su-mascota-favorita-animal-comprado-tienda-mascotas-aislado-sobre-fondo-amarillo_273609-34264.jpg',
            titulo: 'Corte de pelo',
            descripcion: 'Los perros pueden contar con dos capas de pelo: el pelo profundo y el pelo protector. Ambos nacen de un mismo folículo. El profundo es el pelo más corto y cercano a la piel, suave y fino, que actúa como aislante. El pelo protector se rodea de varios pelos profundos y es el que forma la capa superior del manto del animal y ayuda a prevenir lesiones.'
          },
          {
            src: 'https://image.freepik.com/foto-gratis/joven-mujer-caucasica-perro-sobre-pared-aislada_1368-114726.jpg',
            titulo: 'Baño',
            descripcion: 'Descripcion del servicio de baño'
          }
        ],
      }
    },
  }
</script>

<style>

.titulo{color: black};

</style>