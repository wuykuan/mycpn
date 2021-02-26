<!--  -->
<template>
  <label for="name" class="one-switch"
    :class="{'is-checked': value}"
   @click="handleClick">
   <input type="checkbox" class="one-switch_input" :name="name" ref="input">
    <span class="one-switch_core" ref="core">
      <span class="one-switch_button"></span>
    </span>
  </label>
</template>

<script>
export default {
 props: {
     value: {
         type: Boolean,
         default: false
     },
     acolor: {
         type: String,
         default: ''
     },
     inacolor: {
         type: String,
         default: ''
     },
     username: {
       type: String,
       default: ''
     }
 },
  data () {
    return {
    };
  },

  components: {},

  computed: {},
  mounted(){
        this.setColor()
        this.$refs.input.checked = this.value
    },
  methods: {
     async handleClick(){
          this.$emit('input', !this.value)
        await  this.$nextTick()
          this.setColor()
          this.$refs.input.checked = this.value
      },
      setColor(){
          if(this.acolor || this.inacolor){
          let color = this.value ? this.acolor : this.inacolor
          this.$refs.core.style.borderColor = color
          this.$refs.core.style.backgroundColor = color
      }
      }
  }
}

</script>
<style lang="scss" scoped>
    .one-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .one-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .one-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      }
    }
  }
    // 选中样式
  .is-checked {
    .one-switch_core{
      border-color: #409eff;
      background-color: #409eff;
      .one-switch_button {
        transform: translateX(20px);
      }
    }
  }
  // 隐藏input标签
  // .one-switch_input{
  //   position:absolute;
  //   width: 0;
  //   height: 0;
  //   opacity: 0;
  //   margin: 0;
  // }

</style>