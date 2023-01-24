<template>
        <nav class="menu">
            <p class="logo">Logo</p>
            <ul>
                <li>
                    <RouterLink :to="{name:'accueil'}">Accueil</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name:'contact'}">Contact</RouterLink>
                </li>
                <li class="categorie" @click.prevent="afficher_menu">
                    Catégorie 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </li>
            </ul>
        </nav>
        <div class="menu_categorie hidden">
            <ul class="item_menu_categorie">
                <svg @click.prevent="cacher_menu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                <li v-for="(categorie,id) in categories" v-bind:key="id" >
                    <RouterLink :to="{name:'categorie', params:{categorie : categorie.nom}}">
                        {{categorie.nom}}
                    </RouterLink>
                </li>
            </ul>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue' 
import {RouterLink} from 'vue-router'
import CategorieApi from '../services/CategorieApi'
import Categorie from "../types/Categorie"
export default defineComponent({
    data(){
        return{
            categories:[] as Categorie[],
        }
    },
    components:{
        RouterLink
    },
    methods:{
        afficher_menu(){
            const menu= document.querySelector(".menu_categorie") as HTMLElement
            menu.classList.remove("hidden");
        },
        cacher_menu(){
            const menu= document.querySelector(".menu_categorie") as HTMLElement
            menu.classList.add("hidden");
        }
    },
    mounted:function(){
        CategorieApi.getAll()
        .then((response:any)=>{
            this.categories=response.data;
            console.log(response.data)
        })
        .catch((e:Error)=>{
            console.log(e);
        })
    }

})
</script>

