import Vue from "vue";
import Vuex from "vuex";
import global from "./global.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global
  }
});
