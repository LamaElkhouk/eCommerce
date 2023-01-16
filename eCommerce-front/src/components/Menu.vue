<template>
    <div>
        <nav>
            <ul>
                <li>
                    <RouterLink :to="{name:'accueil'}">Accueil</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name:'accueil'}">Autre</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
    
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

