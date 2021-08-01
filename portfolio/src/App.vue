<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <global-header/>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader.vue'

export default {
  name: 'App',
  components: {
    GlobalHeader
  }
}
</script>

<style lang='less'>
@import './assets/style/colors';

body {
  background-image: url('./assets/trippy background-small.png'), 
    url('./assets/trippy background-smaller.png'), 
    url('./assets/trippy background.png');
  background-blend-mode: color;
  color: @TEXT-COLOR;
  margin: 0pt;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
