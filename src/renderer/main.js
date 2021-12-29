import Vue from 'vue'
import App from './App'
import '@toast-ui/editor/dist/toastui-editor.css'
// import router from './router'

window.nodeRequire = require
delete window.require
delete window.exports
delete window.module

// if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

/* eslint-disable no-new */
new Vue({
  components: { App },
  // router,
  template: '<App/>'
}).$mount('#app')

Vue.config.productionTip = false

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
