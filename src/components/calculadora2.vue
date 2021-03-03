<template>
    <v-container>
        <v-card>
            <v-card-title>
                Calculadora
            </v-card-title>
            <div class="columns medium-4">
                <v-card>
                    <v-card-text>
                    <v-row align="center">
                        <v-checkbox
                        v-model="enabled1"
                        hide-details
                        class="shrink mr-2 mt-0" @click="action()"
                        ></v-checkbox>
                        <v-autocomplete multiple 
                            :disabled="!enabled1"
                            :items= "options"
                            label="Corte de pelo"
                        ></v-autocomplete>
                    </v-row>
                    <v-row align="center">
                        <v-checkbox
                        v-model="enabled"
                        hide-details
                        class="shrink mr-2 mt-0"
                        ></v-checkbox>
                        <v-text-field
                        :disabled="!enabled"
                        label="Baño"
                        ></v-text-field>
                    </v-row>
                    </v-card-text>
                </v-card>
            </div>
        </v-card>
        <v-row>
            <v-col cols="4"><br><br><br><br><br><br><br>
                <v-subheader>Total</v-subheader>
            </v-col>
            <v-col cols="8"><br>
                <v-text-field
                label="Corte de pelo"
                class="A"
                v-model.number="A1">
                </v-text-field>
                <v-text-field
                label="Baño"
                class="B"
                v-model.number="B2" >
                </v-text-field> 
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
        Final:"",
        A1: "",
        B2: "", 
        enabled1: false,
        enabled: false,
        options:[],
        petsLIst: 
        [
            {
                Nombre: "Corte de pelo",
                id: true,
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
                id: true,
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
        action(){

            if (this.enabled1 === true){
                this.options = ['grande', 'mediano', 'pequeño']
                console.log('mediano')
            }

        }

    }

}
    
</script>