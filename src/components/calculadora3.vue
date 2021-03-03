<template>
    <v-container>
        <v-card>
            <v-card-title>
                Calculadora
            </v-card-title>
            <div class="columns medium-4" v-for="pet in petsLIst" :key="pet.Nombre">
                <v-checkbox class="Valor"  :label="pet.Nombre"  v-model="pet.id" @click="action( pet.Nombre)">
                </v-checkbox>
                <v-autocomplete 
                    :disabled="!pet.id"
                    :items= "['grande', 'mediano', 'pequeño']"
                    :search-input.sync="searchInput"
                    @click="action2()"
                    :label="pet.Nombre"
                ></v-autocomplete>
                <v-content id="mas">
                    
                </v-content>
            </div>
        </v-card>
        <v-row>
            <v-col cols="4"><br><br><br><br><br><br>
                <v-subheader>Total</v-subheader>
            </v-col>
            <v-col cols="8">
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
        Final:0,
        A1: "",
        B2: "",
        opt: true,
        searchInput: "",  
        petsLIst: 
        [
            {
                Nombre:"Corte de de pelo",
                id: false,
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
                id: false,
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
        ],
        num:[1,2,3,4,5,6]
        }
    },
    methods: {

        action (Nombre) {
            var aux= this.petsLIst.find(
                function(a) {
                    console.log("El id es: ",a.id) 
                    return a.Nombre == Nombre;
                }
            )
            console.log(aux)
            if(aux.id===true){
                console.log("Click en ",Nombre)
                console.log("Entre al if de true")
                if(aux.Nombre === "Baño"){
                    this.Final = this.Final + aux.Caracteristicas[0].Opciones[1].Valor
                    this.B2 = aux.Caracteristicas[0].Opciones[1].Valor
                    console.log(aux.Caracteristicas[0].Opciones[1].Valor)

                }
                if(aux.Nombre === "Corte de de pelo"){
                    this.Final = this.Final + aux.Caracteristicas[0].Opciones[0].Valor
                    this.A1 = aux.Caracteristicas[0].Opciones[0].Valor
                    console.log(aux.Caracteristicas[0].Opciones[0].Valor)
                }
            }else{
                if(aux.Nombre === "Baño"){
                    this.Final = this.Final - aux.Caracteristicas[0].Opciones[1].Valor
                    this.B2 = this.B2 - aux.Caracteristicas[0].Opciones[1].Valor
                    console.log("Click en ",Nombre)
                    console.log("Estoy en else")
                }
                if(aux.Nombre === "Corte de de pelo"){
                    this.Final = this.Final - aux.Caracteristicas[0].Opciones[0].Valor
                    this.A1 = this.A1 - aux.Caracteristicas[0].Opciones[0].Valor
                    console.log(aux.Caracteristicas[0].Opciones[0].Valor)
                }
            }
            
        },
        action2(){
                    console.log(this.searchInput)
        }

    }

}
    
</script>