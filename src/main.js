import { createApp } from 'vue';
import App from './App.vue';
import LikedCatsApp from './LikedCatsApp.vue';
import uiComponents from './components/UI/index.js';

const app = createApp(App);
const likedCatsApp = createApp(LikedCatsApp);

uiComponents.forEach(component => {
    app.component(component.name, component);
    likedCatsApp.component(component.name, component);
});

app.mount('#app');
likedCatsApp.mount('#liked-app');
