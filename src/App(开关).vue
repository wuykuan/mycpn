<template>
  <div id="app">
    <!-- <switchh
      v-model="active"
    /> -->
     <switchh
      v-model="active"
      acolor="green"
      inacolor="red"
      name="username"
    />
  </div>
</template>
<script>
import switchh  from "./common/switchh"
export default {
  name: "App",
 data () {
   return {
    active: false
   }
 },
 components:{
  switchh
 },
 methods: {
 }
}
</script>
<style lang="scss">

</style>
