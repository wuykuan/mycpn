<template>
  <div id="app">
    <Radio label="1" v-model="gender">男</Radio>
    <Radio label="0" v-model="gender">女</Radio>
  </div>
</template>
<script>
import Radio  from "./common/Radio"
export default {
  name: "App",
 data () {
   return {
    gender: '1'
   }
 },
 components:{
  Radio
 },
 methods: {
 }
}
</script>
<style lang="scss">

</style>
