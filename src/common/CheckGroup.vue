<!--  -->
<template>
  <div class="one-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CheckGroup",
  props: {
      value: {
          type: Array
      }
  },
  provide(){
    return {
        CheckboxGroup : this
    }
  },
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>

</style>