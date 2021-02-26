<!--  -->
<template>
  <div class="one-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
 nama: "RadioGroup",
 provide() {
     return {
         RadioGroup: this
     }
 },
 props: {
     value: null,

 },
  data () {
    return {
      str: "控制自己，掌控敌人"
    };
  },

  components: {},

  computed: {},
  methods: {
    haha(){
      console.log('wuliao');
    }
  }
}

</script>
<style scoped>
</style>