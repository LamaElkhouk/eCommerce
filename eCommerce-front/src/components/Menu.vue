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
            </ul>
        </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue' 
import {RouterLink} from 'vue-router'
export default defineComponent({
    data(){
        return{

        }

    },
    components:{
        RouterLink
    }

})
</script>

