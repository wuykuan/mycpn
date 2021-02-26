<template>
  <div id="app">
     <an-niu type="warning" @click="visible=true">点我提示</an-niu>
     <Dialog 
      width="40%" top="100px"
      :visible.sync="visible"
     > 
       <template v-slot:title>
         <h1>微信提示</h1>
       </template>
        <h3>这是提示的内容</h3>
       <template v-slot:footer>
         <AnNiu round type="primary" @click="visible=flase">确定</AnNiu>
         <AnNiu @click="visible=flase">取消</AnNiu>
       </template>
     </Dialog>
  </div>
</template>
<script>
import Dialog from './common/Dialog'
import AnNiu from './common/AnNiu.vue'
export default {
  name: "App",
 data () {
   return {
    visible: false
   }
 },
 components:{
  Dialog,
  AnNiu
 },
 methods: {
 }
}
</script>
<style lang="scss">

</style>
