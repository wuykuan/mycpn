<!--  -->
<template>
  <div>
      {{content[curIdx]}}
      <p>{{this.$store.state.arr}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data () {
    return {
        content: [
            "页面1",
            "页面2",
            "页面3",
            "页面4"
        ]
    };
  },

  components: {},

  computed: {
    ...mapState(['curIdx'])
  },

  methods: {}
}

</script>
<style scoped>
</style>