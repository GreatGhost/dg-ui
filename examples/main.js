import Vue from "vue";
import App from "./App.vue";
import DgUI from "../packages";
Vue.config.productionTip = false;

Vue.use(DgUI);
new Vue({
  render: h => h(App)
}).$mount("#app");
