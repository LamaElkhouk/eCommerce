<template>
  <div>
    <h1>{{titre}}</h1>
    
    <Menu/>
    <RouterView/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue' 
import Menu from './components/Menu.vue'
import {RouterView} from 'vue-router'
export default defineComponent({
    data(){
        return{
          titre:'projet eCommerce' as string
        }
    },
    components:{
      Menu,
      RouterView
    }

})
</script>

