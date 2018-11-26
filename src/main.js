import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelazyload from 'vue-lazyload'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import "font-awesome/css/font-awesome.min.css";

Vue.use('vuelazyload',{

})
Vue.use(iView);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
