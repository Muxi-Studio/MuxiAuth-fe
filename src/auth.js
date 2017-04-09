import Vue from 'vue'
import Auth from './components/auth.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
import style from './main.scss'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'

Vue.use(Vuelidate)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[
        { path: '/', component: Login },
        { path: '/register', component: Register },
        { path: '/newpsd', component: newpsd}
    ],
    linkActiveClass:'color:red;'
})

new Vue({
    el: "#auth",
    router,
    render: h => h(Auth)
})
