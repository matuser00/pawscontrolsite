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

<script>
export default {
    data(){
        return{
            final2:0,
        Final:0, 
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
    methods: {
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