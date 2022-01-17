import Vue from "vue";
import Vuex from "vuex";
import global from "./global.store";
import project from "./project.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    project
  }
});
