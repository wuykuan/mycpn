<template>
  <div>
    <h1>
      counter1: {{ count }}
    </h1>
    <button @click="setCount(4)">增加4</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {
    ...mapState('counter1',{
       count: state => state.count
    })
  },

  mounted() {},

  methods: {
    ...mapMutations('counter1',['setCount'])
  }
}

</script>
<style scoped>
</style>