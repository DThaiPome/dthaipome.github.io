<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <div ref="container">
      <global-header/>
      <router-view></router-view>
    </div>
    <global-footer ref="footer"/>
  </div>
</template>

<script>
import GlobalHeader from './components/GlobalHeader.vue';
import GlobalFooter from './components/GlobalFooter.vue';

import { mapMutations } from 'vuex';
import { SET_APP_EL } from './store/global.store';

export default {
  name: 'App',
  components: {
    GlobalHeader, GlobalFooter
  },
  mounted() {
    this[SET_APP_EL](this);
    this.initHandler();
    this.$nextTick(this.repositionFooter);
  },
  beforeDestroy() {
    this.destroyHandler();
  },
  watch: {
    $route() {
      this.$nextTick(this.repositionFooter);
    }
  },
  computed: {
    container() {
      return this.$refs.container;
    },
    footer() {
      return this.$refs.footer;
    }
  },
  methods: {
    ...mapMutations('global', [ SET_APP_EL ]),
    initHandler() {
      window.addEventListener('resize', this.repositionFooter);
    },
    destroyHandler() {
      window.removeEventListener('resize', this.repositionFooter);
    },
    repositionFooter() {
      this.footer.reposition(this.container.offsetHeight);
    }
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
  background-attachment: fixed;
  color: @TEXT-COLOR;
  margin: 0pt;

  animation-duration: sqrt(pow(@INFINITE-TIME, 2) + pow(@INFINITE-TIME, 2)) * 1s * @INFINITE-TIME-SPEED-CO;
  animation-name: move;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  height: 100%;
}

#app {
  backdrop-filter: blur(100%);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
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
