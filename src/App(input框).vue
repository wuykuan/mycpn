<template>
  <div id="app">
    <!-- <ShuRu 
    placeholder="请输入用户名"
    type="password"
    name="username"
    disabled
    /> -->
      <ShuRu placeholder="请输入密码" v-model="username" clearable/>
      <ShuRu placeholder="请输入密码" v-model="username" show-password/>
      <ShuRu placeholder="请输入密码"/>
  </div>
</template>
<script>
import ShuRu from "./common/ShuRu"
export default {
  name: "App",
 data () {
   return {
    username: ''
   }
 },
 components:{
  ShuRu
 },
 methods: {
 }
}
</script>
<style lang="scss">

</style>
