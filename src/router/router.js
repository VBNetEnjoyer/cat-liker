import MainPage from "../pages/MainPage.vue";
import LikedCats from "../pages/LikedCats.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/liked",
        component: LikedCats
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router;
