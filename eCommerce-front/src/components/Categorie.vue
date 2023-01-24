<template>
    <div>
        <h1>{{categorie}}</h1>
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
    </div>
</template>

<script lang="ts">
import {defineComponent, hydrate} from "vue"
import ArticleApi from "../services/ArticleApi"
import Article from "../types/Article"
export default defineComponent({
    data(){
        return{
            categorie:this.$route.params.categorie,
            articles:[] as Article[],
        }
    },
    methods:{
        truncate(value:string){
            if (value.length > 40) {
                value = value.substring(0, 120) + '...';
            }
            return value
        },
        hydrate(){
            ArticleApi.getByCategorie(this.categorie)
            .then((response:any)=>{
                this.articles=response.data;
            })
            .catch((e:Error)=>{
                console.log(e);
            })
        }
    },
    mounted:function(){
        this.hydrate()
    },
    watch: {
        '$route'(to, from) {
            this.categorie = to.params.categorie
            this.hydrate()
        }
    },

})
</script>

<style>

</style>