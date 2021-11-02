<!--<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>-->

<template>
  <div id="app">
    <router-view/>
    <!--<SopaDeLetras />-->
  </div>
</template>

<script>
//import SopaDeLetras from '@/components/sopadeLetra/SopaDeLetras.vue'
export default {
  name: 'app',
  /*components: {
    SopaDeLetras
  }*/
}
</script>

<style>
</style>