// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Store from './vuex'
import './vant.js'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
const store = new Vuex.Store(Store)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})