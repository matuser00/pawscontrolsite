<template>
  <v-carousel hide-delimiters cycle height="400"     
    show-arrows-on-hover>


    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">

        <v-row class="fill-height" align="center" justify="center"  >
            <div class="display-3" >
            {{ item.titulo }} 
          </div>    
        </v-row>

    </v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://images.adsttc.com/media/images/566a/203f/e58e/ceff/8600/002b/large_jpg/04.jpg?1449795625',
            titulo: 'Ejemplo 1'
          },
          {
            src: 'https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png',
                        titulo: 'Ejemplo 2'
          },
          {
            src: 'https://www.flowww.net/hubfs/Q3_AGOSTO%202018/BLOG_ES/como-escoger-los-muebles-de-tu-salon-de-unas.png',
                        titulo: 'Ejemplo 3'
          },
          {
            src: 'https://www.dondeir.com/wp-content/uploads/2019/01/cortes-de-cabello-para-hombre-2019.jpg',
                        titulo: 'Ejemplo 4'
          }
        ],
      }
    },
  }
</script>

<style>

.display-3 {color: black} ;

</style>