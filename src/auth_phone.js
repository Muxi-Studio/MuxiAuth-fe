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

if (window.location.href.includes('landing')) {
	var index = window.location.href.indexOf('landing');
	var lands = window.location.href.slice(index+8);
    var land = decodeURIComponent(lands);

    var lastChar = land[land.length-1];
    if (lastChar !== '/')
        land += '/';

	localStorage.setItem('landing',land)
}
