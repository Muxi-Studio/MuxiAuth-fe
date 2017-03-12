<template>
    <div>
        <div class="box">
            <div class="iconbox">
                <img src="http://p1.bqimg.com/4851/b4cd511b8361c9fc.png" class="icon">
            </div>
            <input type="text" v-model.trim="emailInput" @blur="isBlur" class="inputbox" placeholder="邮箱">
        </div>
        <div v-if="!$v.emailInput.email && this.blur" class="checkemail check">邮箱格式有误</div>
        <div class="box">
            <div class="iconbox">
                <img src="http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
            </div>
            <input v-model.trim="passwordInput" type="password" @blur="isBlur" class="inputbox" placeholder="密码(不少于六位)" v-show="!showPass">
            <input v-model.trim="passwordInput" type="text" class="inputbox" placeholder="密码(不少于六位)" v-show="showPass">
            <div class="iconbox">
                <img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon" v-on:click="showPass = !showPass">
            </div>
        </div>
        <div class="checkpsd check" v-if="!$v.passwordInput.minLength&& this.blur">密码请勿少于六位</div>
        <button v-on:click="submit" class="change box">登录</button>
    </div>
</template>
<script>
import {
    email,
    minLength
} from 'vuelidate/lib/validators'
export default {
    data() {
            return {
                emailInput: '',
                passwordInput: '',
                showPass: false
            }
        },
        validations: {
            emailInput: {
                email
            },
            passwordInput: {
                minLength: minLength(6)
            }
        },
        methods: {
            isBlur() {
                this.blur = true
            },
            submit() {
                fetch("/api/v1.0/login/", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.emailInput,
                        password: this.passwordInput
                    })
                }).then(res => {
                    return res.json()
                }).then(res => {
                    console.log(res)
                        //this.token = res.token

                })
            }
        }
}
</script>
