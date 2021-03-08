<template>

    <v-container>
      <div>
        <H2>Otra Opción</H2>
        <v-card>
              <v-content >
                  <v-img
                    height="600"
                    src="https://image.freepik.com/foto-gratis/perro-siendo-revisado-veterinario-tienda-mascotas_23-2148872561.jpg"
                  >
                  </v-img>       
                  <v-row  align="start" justify="end" 
        >
                    <v-card class="transparent"
                      max-width="400"
                    >
                    <v-card-title class="title">Titulo de las imagenes </v-card-title>
                    </v-card>
                  </v-row>
              </v-content>
        </v-card>
      </div>
      <v-content  v-for="(id,i) in items" :key="i" v-show="id.image"  >
        <div class="carrusel" id="carrusel" >
        {{id}}{{i}}
        <v-row align="center" justify="end" style="height: 600px;" >
          <v-col  md="8">
             <v-card class="transparent"
              max-width="400"
            >
            <v-card-title class="title">{{id.titulo}} </v-card-title>
            </v-card>
          </v-col>
          <v-col>
            <v-row justify="end">
              <v-btn @click="display(i)" >next</v-btn>
            </v-row>
          </v-col>
        </v-row>     
        </div>  
      </v-content>
    </v-container>
</template>


<script>
  export default {
    data () {
      return {
        aux: true,
        aux2: false,
        aux3: false,
        shows: [{image:false},{image:false},{image:true}],
        items: [
          {
            image:true,
            src: 'https://image.freepik.com/foto-gratis/perro-siendo-revisado-veterinario-tienda-mascotas_23-2148872561.jpg',
            titulo: 'PetMascota',
            descripcion: 'Descripcion del servicio'
          },
          {
            image:false,
            src: 'https://image.freepik.com/vector-gratis/hospital-moderno-perros-gatos_74855-7620.jpg',
            titulo: 'Servicios',
            descripcion: 'Descripcion del servicio en general'
          },
          {
            image:false,
            src: 'https://image.freepik.com/foto-gratis/mujer-afroamericana-positiva-sostiene-perro-miniatura-obediente-manos-pasa-dia-libre-su-mascota-favorita-animal-comprado-tienda-mascotas-aislado-sobre-fondo-amarillo_273609-34264.jpg',
            titulo: 'Corte de pelo',
            descripcion: 'Los perros pueden contar con dos capas de pelo: el pelo profundo y el pelo protector. Ambos nacen de un mismo folículo. El profundo es el pelo más corto y cercano a la piel, suave y fino, que actúa como aislante. El pelo protector se rodea de varios pelos profundos y es el que forma la capa superior del manto del animal y ayuda a prevenir lesiones.'
          },
          {
            image:false,
            src: 'https://image.freepik.com/foto-gratis/joven-mujer-caucasica-perro-sobre-pared-aislada_1368-114726.jpg',
            titulo: 'Baño',
            descripcion: 'Descripcion del servicio de baño'
          }
        ],
        alignments: [
        'start',
        'center',
        'end',
      ],
      }
    },
    methods:{
      display(opcion){
        console.log(opcion)
        this.items[opcion].image = false
        this.items[(opcion + 1) % 4].image = true
        console.log(this.items[(opcion + 1) % 4].src)
        document.getElementById("carrusel").style.background = "url("+this.items[(opcion + 1) % 4].src+")";

      }
    }
  }
</script>

<style>
.titulo{color: black};

.transparent {
   background-color: #000 !important;
   opacity: 0.65;
   border-color: transparent!important;
 }

 .title{
   color:#009688ff
 }

 #carrusel{
  margin:10px auto;
  border-radius:5px;
  border: 1px solid #999;
  padding:13px;
  width:100%;
  height:650px;
  background-size: 100% 100%;
  background-repeat:no-repeat;
  background:url('https://image.freepik.com/foto-gratis/perro-siendo-revisado-veterinario-tienda-mascotas_23-2148872561.jpg');
  background-size: cover;
 }
</style>