<template>
  <div id="app">
     <!-- <Radio label="1" v-model="gender">男</Radio>
      <Radio label="0" v-model="gender">女</Radio> -->
    <RadioGroup v-model="gender">
      <Radio label="1">男</Radio>
      <Radio label="0">女</Radio>
    </RadioGroup>
  </div>
</template>
<script>
import RadioGroup  from "./common/RadioGroup"
import Radio from "./common/Radio"
export default {
  name: "App",
 data () {
   return {
    gender: '1'
   }
 },
 components:{
  RadioGroup,
  Radio
 },
 methods: {
 }
}
</script>
<style lang="scss">

</style>
