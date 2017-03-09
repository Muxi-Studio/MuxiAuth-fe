import Vue from 'vue'
import Auth from './components/auth.vue'
import style from './main.scss'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


new Vue({
	el:"#auth",
	render: h => h(Auth)
})