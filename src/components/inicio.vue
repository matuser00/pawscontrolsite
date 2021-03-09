<template>

    <v-container>
      <div>
        <H2>Opción 1</H2>
        <v-carousel cycle style="height: 600px;" hide-delimiter-background show-arrows-on-hover>
          <template v-slot:prev="{ on, attrs }">
            <div color="transparent" v-for="(id,i) in items" :key="i" v-show="id.image" >
              <v-card-title color="transparent" class="title" v-bind="attrs" v-on="on">
                {{id.titulo}} 
              </v-card-title>
            </div>
          </template>
          <template v-slot:next="{ on, attrs }">
              <v-content  v-for="(id,i) in items" :key="i" v-show="id.image"  >
                <v-btn color="info" v-bind="attrs" v-on="on">Next</v-btn>
              </v-content>
          </template>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" >
              <v-row class="fill-height" align="center" justify="center">
              </v-row>
          </v-carousel-item>
        </v-carousel>
      </div>
      
      <v-content  v-for="(id,i) in items" :key="i" v-show="id.image"  >
        <div class="carrusel"  :style="id.style" >
        <H2>Opción 2</H2>
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
              <v-container >
                  <v-flex>
                          <v-card-title>
                              Calculadora
                          </v-card-title><br>
                  </v-flex>
              </v-container>
              <v-card>
                  <v-row justify="center">

                      <div class="columns medium-4" v-for="pet in petsLIst" :key="pet.Nombre">
                        <v-flex> 
                          <p> {{pet.Nombre}}</p>
                        </v-flex>

                          <div v-for="carac in pet.Caracteristicas" :key="carac.Nombre">
                              {{carac.Nombre}}
                              <div v-for="precios in carac.Opciones" :key="precios.Nombre">
                                  <v-checkbox :label="precios.Nombre" v-model="precios.id" @click="action2(precios)">
                                  </v-checkbox>
                              </div>
                          </div>
                      </div>
                  </v-row>
              </v-card>
              <v-row>
                  <v-col cols="4">
                      <v-subheader>Total</v-subheader>
                  </v-col>
                  <v-col cols="8">
                      <v-text-field
                      label="Resultado"
                      class="Resultado"
                      v-model="Final">
                      </v-text-field>                              
                  </v-col>
              </v-row>
          </v-container>
      </template>

    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        aux: true,
        aux2: false,
        aux3: false,
        final2:0,
        Final:0,
        items: [
          {
            image:false,
            src:'https://image.freepik.com/foto-gratis/perro-siendo-revisado-veterinario-tienda-mascotas_23-2148872561.jpg',
            style: 'background:url(https://image.freepik.com/foto-gratis/perro-siendo-revisado-veterinario-tienda-mascotas_23-2148872561.jpg);background-repeat:no-repeat;background-size: cover;',
            titulo: 'PetMascota',
            descripcion: 'Descripcion del servicio'
          },
          {
            image:false,
            src:'https://image.freepik.com/vector-gratis/hospital-moderno-perros-gatos_74855-7620.jpg',
            style: 'background:url(https://image.freepik.com/vector-gratis/hospital-moderno-perros-gatos_74855-7620.jpg);background-repeat:no-repeat;background-size: cover;',
            titulo: 'Servicios',
            descripcion: 'Descripcion del servicio en general'
          },
          {
            image:false,
            src: 'https://image.freepik.com/foto-gratis/mujer-afroamericana-positiva-sostiene-perro-miniatura-obediente-manos-pasa-dia-libre-su-mascota-favorita-animal-comprado-tienda-mascotas-aislado-sobre-fondo-amarillo_273609-34264.jpg',
            style: 'background:url(https://image.freepik.com/foto-gratis/mujer-afroamericana-positiva-sostiene-perro-miniatura-obediente-manos-pasa-dia-libre-su-mascota-favorita-animal-comprado-tienda-mascotas-aislado-sobre-fondo-amarillo_273609-34264.jpg);background-repeat:no-repeat;background-size: cover;',
            titulo: 'Corte de pelo',
            descripcion: 'Los perros pueden contar con dos capas de pelo: el pelo profundo y el pelo protector. Ambos nacen de un mismo folículo. El profundo es el pelo más corto y cercano a la piel, suave y fino, que actúa como aislante. El pelo protector se rodea de varios pelos profundos y es el que forma la capa superior del manto del animal y ayuda a prevenir lesiones.'
          },
          {
            image:true,
            src:'https://image.freepik.com/foto-gratis/joven-mujer-caucasica-perro-sobre-pared-aislada_1368-114726.jpg',
            style: 'background:url(https://image.freepik.com/foto-gratis/joven-mujer-caucasica-perro-sobre-pared-aislada_1368-114726.jpg);background-repeat:no-repeat;background-size: cover;',
            titulo: 'Baño',
            descripcion: 'Descripcion del servicio de baño'
          }
        ],
        petsLIst: 
        [
            {
                Nombre: 'Corte de de pelo' ,
                Caracteristicas: 
                [
                    {
                        Nombre: "Tamaño",
                        Opciones: 
                        [
                            {
                                Nombre :"Chico",
                                id: false,
                                Valor : 30
                            },
                            {
                                Nombre : "Grande",
                                id: false,
                                Valor : 80
                            }
                        ]
                    }
                ],
            },
            {
                Nombre:'Baño',
                id: false,
                Caracteristicas: 
                [
                    {
                        Nombre: "Tipo de baño",
                        Opciones: 
                        [
                            {
                                Nombre :"Sencillo",
                                id: false,
                                Valor : 150
                            },
                            {
                                Nombre : "Completo",
                                id: false,
                                Valor : 350
                            }
                        ]
                    }
                ],
            }            
        ],
      }
    },
    methods:{
      display(opcion){
        console.log(opcion)
        this.items[opcion].image = false
        this.items[(opcion + 1) % 4].image = true
      },
       action (Servicio,Caracteristica,Opcion) {
            var aux= this.petsLIst.find(
                function(a) {
                    return a.Nombre == Servicio;
                }
            )
            var aux2= aux.Caracteristicas.find(
                function(a) {
                    return a.Nombre === Caracteristica;
                }
            )
            var aux3= aux2.Opciones.find(
                function(a) {
                    return a.Nombre === Opcion;
                }
            )  
            console.log(aux3.Valor)          
            if(aux3.id===true){
                this.Final = this.Final + aux3.Valor
            }else{
                this.Final = this.Final - aux3.Valor
            }
            
        },
        action2(jsonOpcionServicio){
            this.Final+=(jsonOpcionServicio.id?1:-1)*jsonOpcionServicio.Valor;
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

 .carrusel{
  margin:10px auto;
  border-radius:5px;
  border: 1px solid #999;
  padding:13px;
  width:100%;
  height:650px;
  background-size: 100% 100%;
 }
</style>