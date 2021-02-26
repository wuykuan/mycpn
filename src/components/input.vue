<template>
  <div class="one-input">
     <input 
     class="one-input_inner"
     :class="{'is-disabled': disabled}"
     :placeholder="placeholder"
     :type="type"
     :disabled="disabled"
     :value="value"
     @input="handInput"
     >
  </div>
</template>

<script>
export default {
    name:'OneInput',
    props:{
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type:String,
            default:'text'
        },
        name: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        clearable:{
            type: Boolean,
            default: false
        },
        showPassword:{
            type: Boolean,
            default: false
        }
        
    },
    methods: {
        handInput (e){
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style lang="scss">
.one-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .one-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;
 
      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }

</style>