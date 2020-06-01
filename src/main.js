import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

import store from './store';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app');

Vue.use(VueToast);
