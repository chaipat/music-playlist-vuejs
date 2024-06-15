import { createApp } from 'vue';
import App from './App-bak.vue';
import { FontAwesomeIcon } from './fontawesome';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
