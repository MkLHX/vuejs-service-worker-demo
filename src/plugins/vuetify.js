import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import fr from 'vuetify/lib/locale/fr';
// import en from 'vuetify/lib/locale/en';


Vue.use(Vuetify);

export default new Vuetify({
    // lang: {
    //   locales: {
    //       en,
    //       fr,
    //   },
    //   current: 'en',
    // },
    // theme: {
    //     themes: {
    //         dark: {
    //             primary: '#74C830',
    //             warning: '#E04E39',
    //             error: '#E04E39',
    //             secondary: '#57a9c4',
    //             gpk_w: '#FFFFFF'
    //         },
    //         light: {
    //             primary: '#74C830',
    //             warning: '#E04E39',
    //             error: '#E04E39',
    //             secondary: '#57a9c4',
    //             gpk_w: '#FFFFFF'
    //         },
    //         custom_theme: {
    //             primary: '#74C830',
    //             warning: '#E04E39',
    //             error: '#E04E39',
    //             secondary: '#57a9c4',
    //             gpk_w: '#FFFFFF'
    //         }
    //     }
    // },
    data: () => ({
        activeMode: null,
    //     theme: null,
    //     language: null
    }),
    // methods: {
    //     checkParam: function (){
    //         this.theme = localStorage.getItem("theme_color");
    //         this.language = localStorage.getItem("language");
    //         if (this.theme === null){
    //             this.theme = "custom theme"
    //         }
    //         if (this.language === null){
    //             this.language = "en"
    //         }
    //     }
    // },
    mounted() {
    //     this.checkParam();
    }
});

