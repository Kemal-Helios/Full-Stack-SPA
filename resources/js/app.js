require('./bootstrap');

window.Vue = require('vue');

// Register the plugin laravel-vue-lang
import { Lang } from 'laravel-vue-lang';
Vue.use(Lang);
import Vuetify from 'vuetify'


Vue.use(Vuetify)

const opts = {}
//components
Vue.component('top-navbar', require('./components/admin-panil/static/TopNavbar.vue').default);
Vue.component('main-app', require('./components/MainApp.vue').default);
import router from './routers/router'


const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(opts)
});
