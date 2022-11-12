import { createApp } from 'vue';
import App from './App.vue';
import uiComponents from './components/UI/index.js';
import router from './router/router.js';

const app = createApp(App);

uiComponents.forEach(component => {
    app.component(component.name, component);
});

app
    .use(router)
    .mount('#app');
