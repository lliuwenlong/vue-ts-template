import Vue from 'vue';
import CompositionApi from '@vue/composition-api';
import { PiniaVuePlugin, createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

const pinia = createPinia();
Vue.use(CompositionApi);
Vue.use(PiniaVuePlugin);

// eslint-disable-next-line vue/require-name-property
new Vue({
    router,
    pinia,
    render: (h) => h(App)
}).$mount('#app');
