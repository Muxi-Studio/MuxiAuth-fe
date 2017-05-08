<template>
    <div>
        <div class="box box-height transparent">
            <div class="iconbox full-height width inline-block vertical-align">
                <svg viewBox="0 0 200 200" class="icon">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#username"></use>
                </svg>
            </div>
            <input type="text" v-model.trim="username" @focus="isFocus" @blur="userBlur" class="inputbox transparent inline-block vertical-align" placeholder="用户名(不超过八个字符)">
        </div>
        <div class="height">
            <div v-if="$v.username.required && this.username_exist && this.userblur" class="check tip-style">用户名已注册
            </div>
            <div v-if="!$v.username.maxLength && $v.username.required" class="check tip-style">不超过八个字符
            </div>
        </div>
        <div class="box box-height transparent">
            <div class="iconbox full-height width inline-block vertical-align">
                <svg viewBox="0 0 200 200" class="icon">>
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#email"></use>
                </svg>
            </div>
            <input type="text" v-model.trim="emailInput" @blur="isBlur" @focus="isFocus" class="inputbox transparent inline-block vertical-align" placeholder="邮箱">
        </div>
        <div class="height">
            <div v-if="this.email_exist && this.blur && $v.emailInput.required && $v.emailInput.email" class="check tip-style">邮箱已注册
            </div>
            <div v-if="!$v.emailInput.email && this.blur" class="check tip-style">邮箱格式不正确</div>
        </div>
        <div class="box box-height transparent">
            <div class="iconbox full-height width inline-block vertical-align">
                <svg viewBox="0 0 200 200" class="icon">>
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#password"></use>
                </svg>
            </div>
            <input v-model.trim="passwordInput" @focus="isFocus" type="password" class="inputbox transparent inline-block vertical-align" placeholder="密码(不少于六位)" v-show="!showPass">
            <input v-model.trim="passwordInput" @focus="isFocus" type="text" class="inputbox transparent inline-block vertical-align" placeholder="密码(不少于六位)" v-show="showPass">
            <div class="iconbox full-height eye inline-block vertical-align" v-on:click="showPass = !showPass">
                <svg viewBox="0 0 200 200" class="icon">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#eye"></use>
                </svg>
            </div>
        </div>
        <div class="height">
            <div class="check tip-style" v-if="!$v.passwordInput.minLength">密码请勿少于六位</div>
        </div>
        <div class="box box-height transparent">
            <div class="iconbox full-height width inline-block vertical-align">
                <svg viewBox="0 0 200 200" class="icon">>
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#password"></use>
                </svg>
            </div>
            <input v-model.trim="psdsecond" class="inputbox transparent inline-block vertical-align" type="password" placeholder="再次输入密码" v-show="!showPass">
            <input v-model.trim="psdsecond" class="inputbox transparent inline-block vertical-align" type="text" placeholder="再次输入密码" v-show="showPass">
            <div class="iconbox full-height eye inline-block vertical-align" v-on:click="showPass = !showPass">
                <svg viewBox="0 0 200 200" class="icon">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#eye"></use>
                </svg>
            </div>
        </div>
        <div class="height">
            <div class="check tip-style" v-if="!$v.psdsecond.sameAs && this.psdsecond">密码输入不一致</div>
        </div>
        <button v-on:click="submit" class="change full-width box-height margin-bottom" :style="changedButton">注册</button>
    </div>
</template>
<script>
import {
    email,
    minLength,
    maxLength,
    sameAs,
    required
} from 'vuelidate/lib/validators'
export default {
    data() {
            return {
                username: '',
                emailInput: '',
                passwordInput: '',
                psdsecond: '',
                focus: false,
                email_exist: true,
                showPass: false,
                blur: false,
                userblur: false,
                submitFlag: false,
                username_exist: true
            }
        },
        validations: {
            username: {
                maxLength: maxLength(8),
                required
            },
            emailInput: {
                email,
                required
            },
            passwordInput: {
                minLength: minLength(6),
                required
            },
            psdsecond: {
                sameAs: sameAs("passwordInput"),
                required
            },
            validationGroup: ['username', 'emailInput', 'passwordInput', 'psdsecond']
        },
        computed: {
            changedButton: function() {
                return {
                    'background-color': this.submitFlag ? 'grey' : '#fd860e'
                }
            }
        },
        mounted(){
            if (window.devicePixelRatio && devicePixelRatio >= 2) {
                var boxes = document.querySelectorAll('.box')
                for (var i = 0; i < boxes.length; i++)
                    boxes[i].className += ' box1';
            }
        },
        methods: {
            isBlur() {
                this.blur = true
                if (this.$v.emailInput.email && this.$v.emailInput.required) {
                    fetch("https://user.muxixyz.com/api/email_exists/?email=" + this.emailInput, {}).then(res => {
                        if (res.ok) {
                            this.email_exist = false
                        } else {
                            this.email_exist = true
                        }
                    })
                }
            },
            userBlur() {
                this.userblur = true
                if (this.$v.username.maxLength && this.$v.username.required) {
                    fetch("https://user.muxixyz.com/api/username_exists/?username=" + this.username, {}).then(res => {
                        if (res.ok) {
                            this.username_exist = false
                        } else{
                            this.username_exist = true
                        }
                    })
                }
            },
            isFocus() {
                this.submitFlag = false
                this.focus = true
            },
            submit(e) {
                if (this.submitFlag) return
                this.submitFlag = true
                if (this.$v.validationGroup && !this.username_exist && !this.email_exist) {
                    fetch("https://user.muxixyz.com/api/register/", {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: this.username,
                            email: this.emailInput,
                            password: this.passwordInput
                        })
                    }).then(res => {
                        console.log("success")
                        if (res.ok) {
                            window.location = "/"
                        }
                    })
                }
            }
        }
}
</script>
<style>
.inputbox {
    width: 65%;
}
</style>
