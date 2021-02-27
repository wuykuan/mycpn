<!--  -->
<template>
  <div>
      hello world<br/>
   <button class="tnt" @click="handdledata"></button>
  </div>
</template>

<script>
import eventBus from "../view/eventBus.js"
export default {
  data () {
    return {
     value:'',
     arr: "接下来介绍如何使用eventBus实现兄弟组件传值"
    };
  },

  components: {},

  computed: {},
  wacth: {},
  methods: {
    handdledata(){
      eventBus.$emit('hahaha', this.arr)
    }
 }
}
</script>
<style scoped>
.tnt{
  width: 100px;
  height: 100px;
}
</style>