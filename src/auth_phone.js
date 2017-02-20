import Vue from 'vue'
import auth from './components/auth_phone.vue'
import style from './main.scss'

console.log('hah')

new Vue({
	el:"#auth_phone",
	render: h => h(auth)
})