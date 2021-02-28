<template>
  <div id="app">
    <Home/>
    <Page/>
    ---------------------------------about组件modules演示--------------------------------
    <PartlOne/>
    <PartlTwo/>
  </div>
</template>
<script>
import Home from "./components/Home"
import Page from "./components/Page"
import PartlOne from "./components/Patrl/PartlOne"
import PartlTwo from "./components/Patrl/PartlTwo"
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    Home,
    Page,
    PartlOne,
    PartlTwo
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 28px;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
