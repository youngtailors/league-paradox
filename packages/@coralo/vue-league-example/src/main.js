import Vue from 'vue'
import App from './App.vue'
import LeagueUI from '@coralo/vue-league'

// Style
import './assets/styl/typography.styl'

Vue.use(LeagueUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
