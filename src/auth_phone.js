import Vue from 'vue'
import Auth from './components/auth_phone.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
import style from './main.scss'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'

Vue.use(Vuelidate)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Login },
        { path: '/register', component: Register }
    ]
})

new Vue({
    el: "#auth_phone",
    router,
    render: h => h(Auth)
})

