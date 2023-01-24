import {createRouter, createWebHistory,RouteRecordRaw} from "vue-router"
import Accueil from "./components/Accueil.vue"
import Contact from "./components/Contact.vue"
import UnArticle from "./components/UnArticle.vue"
import Categorie from "./components/Categorie.vue"
import NotFound from "./components/NotFound.vue"

const routes:Array<RouteRecordRaw> = [
    { path : "/", name:"accueil",component:Accueil},
    { path:"/contact",name:"contact",component:Contact},
    { path:"/article/:id",name:"unarticle",component:UnArticle},
    {path:"/categorie/:categorie",name:"categorie",component:Categorie},
    { path:"/:pathMatch(.*)*", name:"NotFound",component:NotFound}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;