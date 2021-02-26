<template>
  <div id="app">
    <Formm :model="model">
         <FormItem label="用户名">
            <ShuRu placeholder="请输入用户名"></ShuRu>
         </FormItem>
         <FormItem label="选择"> 
           <Switchh></Switchh>
         </FormItem>
    </Formm>
  </div>
</template>
<script>
import Formm from "./common/form/Formm"
import FormItem from "./common/form/FormItem"
import ShuRu from "./common/ShuRu"
import Switchh from "./common/Switchh"
export default {
 name: "App",
 data () {
   return {
      model: {

      }
   }
 },
 components:{ 
   Formm,
   FormItem,
   ShuRu,
   Switchh
 },
 methods: {
 }
}
</script>
<style lang="scss">

</style>
