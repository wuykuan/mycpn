

<template>
  <div class="one-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "formm",
  props: {
    model: {
      type: Object,
      rquired: true
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