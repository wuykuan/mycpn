<template>
  <div id="app">
    <!--1默认按钮 <an-niu>默认按钮</an-niu>
    <an-niu type="primary">主要按钮</an-niu>
    <an-niu type="success">成功按钮</an-niu>
    <an-niu type="info">信息按钮</an-niu>
    <an-niu type="warning">警告按钮</an-niu>
    <an-niu type="danger">危险按钮</an-niu>
    <an-niu type="wode">juanjuan</an-niu> -->
    <!-- 2、朴素按钮 <an-niu plain >默认按钮</an-niu>
    <an-niu plain type="primary">主要按钮</an-niu>
    <an-niu plain type="success">成功按钮</an-niu>
    <an-niu plain type="info">信息按钮</an-niu>
    <an-niu plain type="warning">警告按钮</an-niu>
    <an-niu plain type="danger">危险按钮</an-niu>
    <an-niu plain type="wode">juanjuan</an-niu> -->
    <an-niu plain round @clickg="dianji" >默认按钮</an-niu>
    <an-niu plain round type="primary">主要按钮</an-niu>
    <an-niu plain round type="success">成功按钮</an-niu>
    <an-niu plain round type="info">信息按钮</an-niu>
    <an-niu plain round type="warning">警告按钮</an-niu>
    <an-niu plain round type="danger">危险按钮</an-niu>
    <an-niu plain round type="wode">juanjuan</an-niu>
    
  </div>
</template>

<script>

import AnNiu from './common/AnNiu.vue'
export default {
  name: "App",
 data () {
   return {
    
   }
 },
 components:{
  AnNiu
 },
 methods: {
   dianji(e){
   console.log('dianjile', e);
   }
 }
}
</script>
<style lang="scss">

</style>
