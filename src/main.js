import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Header from './components/Header'
import Footer from './components/Footer'

Vue.use(ElementUI);

Vue.use(Header);

Vue.use(Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
