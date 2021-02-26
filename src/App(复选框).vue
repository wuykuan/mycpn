<template>
  <div id="app">
     <Checkbox label="抽烟" v-model="active"></Checkbox>
   <CheckGroup v-model="hobby">
      <Checkbox label="抽烟"></Checkbox>
      <Checkbox label="喝酒"></Checkbox>
      <Checkbox label="烫头"></Checkbox>
   </CheckGroup>
 
  </div>
</template>
<script>
import CheckGroup from "./common/CheckGroup"
import Checkbox from "./common/Checkbox"
export default {
 name: "App",
 data () {
   return {
    active: false,
    hobby: ['抽烟']
   }
 },
 components:{
   Checkbox,
   CheckGroup
 },
 methods: {
 }
}
</script>
<style lang="scss">

</style>
