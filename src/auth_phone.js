import Vue from 'vue'
import auth from './components/auth_phone.vue'
import style from './main.scss'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

new Vue({
    el: "#auth_phone",
    render: h => h(auth)
})
