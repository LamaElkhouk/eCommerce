<template>
  <div class="header">
    <Menu/>
  </div>
  <div class="container">
    <RouterView/>
  </div>
  <div class="footer">
    <Footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue' 
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import {RouterView} from 'vue-router'
export default defineComponent({
    data(){
        return{
          titre:'projet eCommerce' as string
        }
    },
    components:{
      Menu,
      Footer,
      RouterView
    }

})
</script>

