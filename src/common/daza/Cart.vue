<!--  -->
<template>
  <div>
      <NavBar class="nav-bar">
         <template #center>
        <div>购物车({{cartLength}})</div>
      </template>
      </NavBar>
      <CartList  class="cart"></CartList>
      <CartBottonBar/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList"
import CartBottonBar from  "./childComps/CartBottonBar"
import { mapGetters, } from 'vuex'
export default {
  name: 'Cart', 
  data () {
    return {
    };
  },

  components: {
    NavBar,
    CartList,
    CartBottonBar
  },

  computed: {
    ...mapGetters(['cartLength'])
  },
  methods: {}
}

</script>
<style scoped>
.cart{
  height: 100vh;
  overflow: hidden;
}
.nav-bar{
  background-color: var(--color-tint);
  color: #ffffff;
  font-weight: 500;
}
</style>