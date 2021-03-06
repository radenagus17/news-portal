import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.prototype.$baseUrl = "https://backend-menit-com.herokuapp.com";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
