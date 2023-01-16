import {createRouter, createWebHistory,RouteRecordRaw} from "vue-router"
import Accueil from "./components/Accueil.vue"
import NotFound from "./components/NotFound.vue"

const routes:Array<RouteRecordRaw> = [
    { path : "/", name:"accueil",component:Accueil},
    { path:"/:pathMatch(.*)*", name:"NotFound",component:NotFound}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;