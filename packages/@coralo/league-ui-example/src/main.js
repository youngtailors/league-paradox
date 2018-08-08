import Vue from 'vue'
import App from './App.vue'

import '@coralo/league-ui/dist/leagueui.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
