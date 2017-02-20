import Vue from 'vue'
import Auth from './components/auth.vue'
import style from './main.scss'

new Vue({
	el:"#auth",
	render: h => h(Auth)
})

