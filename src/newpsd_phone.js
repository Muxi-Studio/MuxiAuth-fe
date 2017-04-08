import Vue from 'vue'
import Auth from './components/newPsd_phone.vue'
import style from './main.scss'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

new Vue({
    el: "#newpsd_phone",
    render: h => h(newPsd)
})
