<template>
    <v-container>
        <v-card>
            <v-card-title>
                Calculadora
            </v-card-title>
            <div class="columns medium-4" v-for="pet in petsLIst" :key="pet.Nombre">
                <v-checkbox class="Valor" :name="pet.Nombre" :label="pet.Nombre" :v-model="pet.Nombre" @click="action( pet.Nombre)">
                </v-checkbox>
            </div>
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
                <v-text-field
                label="A"
                class="A"
                v-model.number="A1">
                </v-text-field>
                <v-text-field
                label="B"
                class="B"
                v-model.number="B2" >
                </v-text-field>                                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

    data(){
        return{
        Final:"",
        A1: "",
        B2: "",    
        petsLIst: 
        [
            {
                Nombre: "Cortede de pelo",
                Caracteristicas: 
                [
                    {
                        Nombre: "Tamaño",
                        Opciones: 
                        [
                            {
                                Nombre :"Chico",
                                Valor : 30

                            },
                            {
                                Nombre : "Grande",
                                Valor : 80
                            }
                        ]
                    }
                ],
            },
            {
                Nombre: "Baño",
                Caracteristicas: 
                [
                    {
                        Nombre: "Tamaño",
                        Opciones: 
                        [
                            {
                                Nombre :"Chico",
                                Valor : 30

                            },
                            {
                                Nombre : "Grande",
                                Valor : 80
                            }
                        ]
                    }
                ],
            }            
        ]
        }
    },
    methods: {
        action (Nombre) {
            console.log("Click en ",Nombre)
            this.A1 = Nombre
            console.log(this.A1)
            console.log(this.B2)
            this.Final= this.A1+this.B2
            
        }

    }

}
    
</script>