// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Vue.http.options.root = process.env.SERVER

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc1NWIyM2RiYmJmZTBjODJjZTllZGZiMDY3ZDE2ODA5NTI1ZGIwMjlhMTEwNWE3ZTkwN2Y3Y2YzNGJiN2JjODRiZTQ1N2VkYTU2MDU1ZmZjIn0.eyJhdWQiOiIxIiwianRpIjoiNzU1YjIzZGJiYmZlMGM4MmNlOWVkZmIwNjdkMTY4MDk1MjVkYjAyOWExMTA1YTdlOTA3ZjdjZjM0YmI3YmM4NGJlNDU3ZWRhNTYwNTVmZmMiLCJpYXQiOjE0OTk2ODkxMzAsIm5iZiI6MTQ5OTY4OTEzMCwiZXhwIjoxODE1MjIxOTMwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.AdP9CmU9o1gwKYwpurC55fcMJAewSk5t9Hnd5J5iwh_bFEx_Ylj-TopPPV6Z9lxk-6RzO2pCelsodKgla02ZiBqS0cf2nP3j3nICLF8O6H3kJobPsKyL9nRjkVe0jFhTmCLPi3wneneX5HNP9-TSXbcp-CWPBFTpX1Bz_BtVEAy7r3Vqb5ry0t8Q7fRfbCHyA-UexVwi-MFgwW9yo3TlrdvRgMOvkVMMmvLJ0hRO5ck4rgoK0w-1RUI8FyGDxAFRxanETUl7NAwcTIhbfVgr_S5dPFoA2xjMzudrhE-5l9nGVsVLSBw81KARVpJzERcxkOk30IaOyg2rER1oVDeM6BMDM8aZxTUbrrzDeBQw-FJ1kWEJBBXwczF7wYBc8FeOy06vUIEu7iazArGxWXgI506CZHsbZu4jPs_Nkzr9S-ZQ5fVV0lrVa_YIUHLV7WQksiAIi3IELsEmKXh0Yb1celVZmuATQ_89mFg4KcmcQ4gu_mgHkLyBUImjWPy9uuRxoD3xz2BmP-JCkse9YrrQlglrcKqMnO91Mb-Bns0UbTc1FfORbTatqvCKjn5cuXpsnoUfxxig31dbHbGp3_aKGFwz40tBPwC3Rw9IhB050vES1Fke2YA2sU8RHdcM94Oa4NJpsCMeUffk8d7HI6hcbg2lzjB6cKX7myin-RqChqM')
  next()
})

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  routes
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
