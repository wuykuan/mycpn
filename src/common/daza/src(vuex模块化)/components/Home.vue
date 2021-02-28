<!--  -->
<template>
  <div>
     <a href="javascript:" :class="[{ current: curIdx === 0}]" @click="setCurIdx(0)">选项1</a>
     <a href="javascript:" :class="[{ current: curIdx === 1}]" @click="setCurIdx(1)">选项2</a>
     <a href="javascript:" :class="[{ current: curIdx === 2}]" @click="setCurIdx(2)">选项3</a>
     <a href="javascript:" :class="[{ current: curIdx === 3}]" @click="setCurIdx(3)">选项4</a>
  </div>
</template>
<script>
import { mapState, mapMutations} from "vuex"

export default { 
  name: "Home",
  data () {
    return {
    };
  },

  components: {},
  computed: {
    ...mapState(['curIdx'])
  },
  methods: {
      // changTab(index){
      //   this.$emit('changTab', index)
      // }
      ...mapMutations(['setCurIdx']),
 }
}
</script>
<style scoped>
a{
  margin-right: 10px;
}
.current{
  text-decoration: none;
  color: black;
}
</style>