import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            //Fondos:
            primary: '#009688',
            secondary: '#f7f4f3',
            accent: '#f0c808',
            info:'#f7fff7',
            //Texto:
            primaryText:'#009688',
            secondaryText:'#009688'
          },
          dark: {
            
          },
        },
      },
});
