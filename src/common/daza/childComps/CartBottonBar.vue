<!--  -->
<template>
  <div class="buttom-bar">
    <div class="check-content">
      <CheckButton
        @click.native="checkClick"
        :isCheck="isSelectAll"
        class="check-button"
      />
      <span>全选</span>
    </div>
    <div class="price">
      合计:<span>{{ totalPrice }}</span>
    </div>
    <div class="calculate" @click="calcClick">去结算:{{ checkLength }}</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkBotton/CheckButton";
import { mapGetters } from 'vuex'
export default {
  name: "CartBottonBar",
  data() {
    return {};
  },

  components: {
    CheckButton,
  },

  computed: {
      ...mapGetters(['cartList']),
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((proValue, item) => {
          return item.price;
          //1、proValue + 多个数据 2、price格式为￥xx.00 没有处理好，导致乘以 item.count是NaN
        }, 0);
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      //   方法1：数组遍历高级函数 要掌握 find map filter reduce foreach some every等
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => !item.checked);
      //方法2：
      //   let ischecked = false
      //   for( let item of this.$store.state.cartList) {
      //       if( !item.checked) {
      //           ischecked = false
      //           break
      //       }
      //   }
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach((item) => (item.checked = false));
      } else {
        this.$store.state.cartList.forEach((item) => (item.checked = true));
      }
    },
    calcClick(){
      if(!this.isSelectAll){
      this.$toast.show('请添加商品喔', 2000)
      }
    }
  },
};
</script>
<style scoped>
.buttom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  bottom: 125px;
  line-height: 40px;
  display: flex;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 22px;
  height: 22px;
  line-height: 22px;
  margin-right: 5px;
}
.price {
  margin-left: 30px;
  flex: 1;
}
.price > span {
  color: red;
}
.calculate {
  width: 90px;
  background-color: red;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
}
</style>