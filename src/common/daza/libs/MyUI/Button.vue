<!--  -->
<template>
  <div>
      <button :class="['my-btn', btnStyle]">BUtton</button>
  </div>
</template>

<script>
export default {
  name:"MyBtn",
  props: {
      btnStyle: {
          type: String
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
.my-btn{
  height: 34px;
  padding: 0 15px;
  border: none;
  outline: none;
  background-color: #000;
  color: #fff;
}
.my-btn.btn-primary{
  background-color: blue;
  color: #fff;
}
.my-btn.btn-danger{
  background-color: red;
  color: #fff;
}
.my-btn.btn-success{
  background-color: green;
  color: #fff;
}
</style>