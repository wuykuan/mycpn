<template>
  <div id="app">
    <!-- <div class="row">
      <hm-button @click="fn">按钮</hm-button>
      <hm-button type="primary">按钮</hm-button>
      <hm-button type="success">按钮</hm-button>
      <hm-button type="info">按钮</hm-button>
      <hm-button type="warning">按钮</hm-button>
      <hm-button type="danger">按钮</hm-button>
    </div>
    朴树按钮 -->
    <!-- <div class="row">
      <hm-button plain >按钮</hm-button>
      <hm-button plain type="primary">按钮</hm-button>
      <hm-button plain type="success">按钮</hm-button>
      <hm-button plain type="info">按钮</hm-button>
      <hm-button plain type="warning">按钮</hm-button>
      <hm-button plain type="danger">按钮</hm-button>
    </div>
     圆角按钮 -->
    <!-- <div class="row">
      <hm-button plain round >按钮</hm-button>
      <hm-button plain round type="primary">按钮</hm-button>
      <hm-button plain round type="success">按钮</hm-button>
      <hm-button plain round type="info">按钮</hm-button>
      <hm-button plain round type="warning">按钮</hm-button>
      <hm-button plain round type="danger">按钮</hm-button>
    </div> -->
    <!-- 原型按钮 -->
    <!-- <div class="row">
      <hm-button plain round circle >按钮</hm-button>
      <hm-button plain round circle type="primary">按钮</hm-button>
      <hm-button plain round circle type="success">按钮</hm-button>
      <hm-button plain round circle type="info">按钮</hm-button>
      <hm-button plain round circle type="warning">按钮</hm-button>
      <hm-button plain round circle type="danger">按钮</hm-button>
    </div> -->

    <!-- 禁用状态 -->
    <!-- <div class="row">
      <hm-button disabled >按钮</hm-button>
    </div>  -->
    <hm-button type="primary" @click="visible = true">提交</hm-button>
    <my-dialog width="20%" top="100px" :visible.sync="visible"> 
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <hm-button type="primary" @click="visible=false">确定</hm-button>
        <hm-button @click="visible=false">取消</hm-button>
      </template>
      </my-dialog>

    <!-- <my-dialog>
      <template v-slot:title>
         <h2> 我是标题</h2>
      </template>
    </my-dialog> -->
    <!-- <transition name="aa">
      <div
      v-show="visible"
      >
      weoajgsdagsh
      </div>
    </transition> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    // fn () {
    //   console.log(133)
    // },
    // close( value) {
    //   this.visible = value
    // }
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin-top: 20px;
  .hm-button {
    margin-right: 20px;
  }
}

.aa-enter-active{
  animation: run .5s;
}
.aa-leave-active{
  animation: run .5s reverse;
}
@keyframes run {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
