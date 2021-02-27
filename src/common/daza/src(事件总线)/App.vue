<template>
  <div id="app">
    <Home/>
    <About/>
  </div>
</template>
<script>
import Home from "./components/Home"
import About from "./components/About"
export default {
  name: 'App',
  components: {
    Home,
    About
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
