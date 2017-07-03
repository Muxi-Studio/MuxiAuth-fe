import Vue from 'vue'
import newpsd from './components/newpsd_phone.vue'
import captcha from './components/captcha.vue'
import reset from './components/reset.vue'
import success from './components/success.vue'
import style from './main.scss'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'

Vue.use(Vuelidate)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/phone/newpsd', component: captcha },
        { path: '/phone/reset', component: reset },
        { path: '/phone/success', component: success }
    ]
})

new Vue({
    el: "#newpsd_phone",
    router,
    render: h => h(newpsd)
})
