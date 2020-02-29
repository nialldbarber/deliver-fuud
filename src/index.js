import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { router } from '~/router'
import store from '~/store'
import App from '~/app.vue'

Vue.use(VueCompositionApi)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
