import Vue from 'vue'
import App from './App.vue'
import LeagueUI from '@coralo/league-ui'

// import '@coralo/league-ui/dist/leagueui.css'

Vue.use(LeagueUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
