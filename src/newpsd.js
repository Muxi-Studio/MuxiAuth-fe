import Vue from 'vue'
import newpsd from './components/newpsd.vue'
import captcha from './components/captcha.vue'
import style from './main.scss'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

new Vue({
    el: "#newpsd",
    render: h => h(newpsd)
})
