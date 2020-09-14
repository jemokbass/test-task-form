import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import filterDate from '@/layouts/date.filter'

Vue.config.productionTip = true
Vue.config.devtools = true

Vue.use(Vuelidate)
Vue.filter('date', filterDate)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
