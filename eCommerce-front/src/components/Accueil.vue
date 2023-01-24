<template>
    <h1>{{titre}}</h1>
    <div class="articles">
        <div class="one_article" v-for="(article,id) in articles" v-bind:key="id">
            <img class="image_article" v-bind:src="article.image">
            <div class="infos_article">
                <h3>{{article.nom}}</h3>
                <p>{{truncate(article.description)}}</p>
            </div>
            
            <div class="prix_article">
                <p>{{article.prix}} €</p>
                <RouterLink :to="{name:'unarticle', params:{id : article.id}}" class="button_article">En savoir plus</RouterLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Article from "../types/Article"
import ArticleApi from "../services/ArticleApi"
import {RouterLink} from "vue-router"
export default defineComponent({
    data(){
        return{
            titre:'Accueil' as string,
            articles:[] as Article[]
        }

    },
    components:{
        RouterLink
    },
    mounted: function(){
        ArticleApi.getAll()
            .then((response)=>{
                this.articles=response.data
                console.log(response.data)
            })
            .catch((e:Error)=>{
                console.log(e);
            })
    },
    methods:{
        truncate(value:string){
            if (value.length > 40) {
                value = value.substring(0, 120) + '...';
            }
            return value
        }
    }

})
</script>

