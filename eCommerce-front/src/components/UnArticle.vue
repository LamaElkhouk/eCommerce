<template>
    <h1>{{article.nom}}</h1>
    <img v-bind:src="article.image">
    <p>{{article.description}}</p>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import Article from "../types/Article"
import ArticleApi from "../services/ArticleApi"
export default defineComponent({
    data(){
        return{
            article:[] as Article[],
            titre:"un article" as string,
            id:this.$route.params.id,
        }
    },
    mounted:function(){
        ArticleApi.getOne(this.id)
        .then((response)=>{
            this.article=response.data
            console.log(response.data)
        })
        .catch((e:Error)=>{
            console.log(e)
        })
    }
})
</script>

<style>

</style>