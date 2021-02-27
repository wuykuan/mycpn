<!-- 
 -->
<template>
  <div>
      {{str}}
  </div>
</template>

<script>
import eventBus from "../view/eventBus.js"
export default {
  data () {
    return {
        str: ""
    };
  },
  created(){
    eventBus.$on('hahaha',
      e => {
       this.str = e
      }
    )
  },
  components: {},
  computed: {},
  methods: {
  }
}

</script>
<style scoped>
</style>