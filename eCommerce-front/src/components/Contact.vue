<template>
    <h1>{{titre}}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue' 
export default defineComponent({
    data(){
        return{
            titre:"Contact" as string
        }
    }

})
</script>

<style>

</style>