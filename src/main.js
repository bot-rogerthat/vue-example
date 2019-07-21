import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.root = 'https://jsonplaceholder.typicode.com/'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
