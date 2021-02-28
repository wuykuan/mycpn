<template>
  <div>
    <h1>
      counter2: {{ count }}
    </h1>
    <button @click="setCount(1)">增加4</button>
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
    ...mapState('counter2',{
       count: state => state.count
    })
  },

  mounted() {},

  methods: {
    ...mapMutations('counter2',['setCount'])
  }
}

</script>
<style scoped>
</style>