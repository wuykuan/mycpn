<!--  -->
<template>
  <div class="cart-list">
    <Bscroll class="content" ref="scroll">
        <CartListItem v-for="(item,index) in cartList" :product="item" :key="index"/>
    </Bscroll>
  </div>
</template>

<script>
import Bscroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem"
import { mapGetters } from 'vuex'
export default {
  name: "CartList",
  data () {
    return {
    };
  },
  components: {
    Bscroll,
    CartListItem
  },

  computed: {
    ...mapGetters(['cartList'])
  },
  methods: {},
  activated(){
      this.$refs.scroll.refresh()
  }
}

</script>
<style scoped>
.cart-list{
  height: calc(100% - 44px - 49px -37px);
}
.content{
  height: 100%;
  overflow: hidden;
}
</style>