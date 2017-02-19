import Vue from 'vue'
import Auth from './components/auth_phone.vue'
import style from './main.scss'

new Vue({
	el:"#auth_phone",
	render: h => h(Auth)
})