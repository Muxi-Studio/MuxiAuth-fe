<template>
    <div>
        <div class="box">
            <div class="iconbox">
                <img src="http://p1.bqimg.com/4851/b4cd511b8361c9fc.png" class="icon">
            </div>
            <input type="text" v-model.trim="emailInput" @blur="isBlur"class="inputbox" placeholder="邮箱">
        </div>
        <div v-if="!$v.emailInput.email && this.blur" class="checkemail check">邮箱格式有误</div>
        <div class="box">
            <div class="iconbox">
                <img src="http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
            </div>
            <input v-model.trim="passwordInput" @blur="isBlur" type="password" class="inputbox" placeholder="密码(不少于六位)" v-show="!showPass">
            <input v-model.trim="passwordInput" type="text" class="inputbox" placeholder="密码(不少于六位)" v-show="showPass">
            <div class="iconbox">
                <img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon" v-on:click="showPass = !showPass">
            </div>
        </div>
        <div class="checkpsd check" v-if="!$v.passwordInput.minLength && this.blur">密码请勿少于六位</div>
        <div class="box">
            <div class="iconbox">
                <img src="http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
            </div>
            <input v-model.trim="psdsecond" @blur="isBlur"class="inputbox" type="password" placeholder="再次输入密码" v-show="!showPass">
            <input v-model.trim="psdsecond" @blur="isBlur"class="inputbox" type="text" placeholder="再次输入密码" v-show="showPass">
            <div class="iconbox">
                <img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon" v-on:click="showPass = !showPass">
            </div>
        </div>
        <div class="match check" v-if="!$v.psdsecond.sameAs && this.blur">密码输入不一致</div>
        <button v-on:click="submit" class="change box">注册</button>
    </div>
</template>
<script>
import {
    email,
    minLength,
    sameAs
} from 'vuelidate/lib/validators'
export default {
    data() {
            return {
                emailInput: '',
                passwordInput: '',
                psdsecond: '',
                showPass: false
            }
        },
        validations: {
            emailInput: {
                email
            },
            passwordInput: {
                minLength: minLength(6)
            },
            psdsecond: {
                sameAs: sameAs("passwordInput")
            }
        },
        methods: {
            isBlur() {
                this.blur = true
            },
            submit() {
                fetch("/api/v1.0/register/", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.emailInput,
                        password: this.passwordInput
                    })
                })
            }
        }
}
</script>
