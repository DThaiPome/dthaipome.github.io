<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <global-header/>
    <router-view></router-view>
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
@import './assets/style/animations';

body {
  background-image: url('./assets/trippy background-small.png'), 
    url('./assets/trippy background-smaller.png'), 
    url('./assets/trippy background.png');
  background-blend-mode: color;
  color: @TEXT-COLOR;
  margin: 0pt;

  animation-duration: sqrt(pow(@INFINITE-TIME, 2) + pow(@INFINITE-TIME, 2)) * 1s * @INFINITE-TIME-SPEED-CO;
  animation-name: move;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

#app {
  backdrop-filter: blur(100%);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

@keyframes move {
  0% {
    background-position: 0pt 0pt;
  }
  100% {
    background-position: @INFINITE-TIME * 1pt @INFINITE-TIME * 1pt;
  }
}
</style>
