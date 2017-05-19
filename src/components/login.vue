<template>
    <div>
        <div class="row">
            <div class="box box-height transparent">
                <div class="iconbox full-height width inline-block vertical-align">
                    <svg viewBox="0 0 200 200" class="icon">
                        <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#email"></use>
                    </svg>
                </div>
                <eInput v-model.trim="emailInput" @focus="isFocus" class="transparent inline-block vertical-align"></eInput>
            </div>
            <div v-if="$v.emailInput.email && $v.emailInput.required && $v.emailInput.isUnique" class="check tip-style">邮箱不存在
            </div>
            <div v-if="!$v.emailInput.email" class="check tip-style">邮箱格式有误</div>
        </div>
        <div class="row">
            <div class="box box-height transparent">
                <div class="iconbox full-height width inline-block vertical-align">
                    <svg viewBox="0 0 200 200" class="icon">>
                        <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#password"></use>
                    </svg>
                </div>
                <input v-model.trim="passwordInput" type="password" class="transparent inline-block vertical-align" placeholder="密码" v-show="!showPass" @focus="isFocus">
                <input v-model.trim="passwordInput" type="text" class="transparent inline-block vertical-align" placeholder="密码" v-show="showPass" @focus="isFocus">
                <div class="iconbox full-height eye inline-block vertical-align" v-on:click="showPass = !showPass">
                    <svg viewBox="0 0 200 200" class="icon">
                        <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#eye"></use>
                    </svg>
                </div>
            </div>
            <svg viewBox="0 0 200 200" class="secret inline-block">>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#secret"></use>
            </svg>
            <div v-on:click="link" class="forget inline-block tip-style">忘记密码？</div>
            <div v-if="this.failed" class="check inline-block fail tip-style">邮箱或密码不正确</div>
        </div>
        <button v-on:click="submit" class="change box-height full-width login-margin" :style="{'background-color': this.submitFlag ? 'grey' : '#fd860e'}">登录</button>
    </div>
</template>
<script>
import Input from './Input.vue'
import {
    email,
    required,
    isUnique
} from 'vuelidate/lib/validators'

export default {
    data() {
            return {
                emailInput: '',
                passwordInput: '',
                showPass: false,
                focus: false,
                submitFlag: false,
                failed: false
            }
        },
        mounted() {
            if (window.devicePixelRatio && devicePixelRatio >= 2) {
                var boxes = document.querySelectorAll('.box')
                for (var i = 0; i < boxes.length; i++)
                    boxes[i].className += ' box1';
            }
        },
        components: {
            "eInput": Input
        },
        validations: {
            emailInput: {
                email,
                required,
                isUnique(value) {
                    return new Promise((resolve, reject) => {
                        resolve(typeof value === 'string' &&
                            this.checkemail(value))
                    })
                }
            },
            passwordInput: {
                required
            },
            validationGroup: ['emailInput', 'passwordInput']
        },
        methods: {
            checkemail(value) {
                fetch(`/api/email_exists/?email=${value}`).then(res => {
                    if (res.ok) {
                        return false
                    } else {
                        return true
                    }
                })
            },
            isFocus() {
                this.submitFlag = false
                this.focus = true
            },
            link(){
                var location = window.location
                console.log(window.location)
                // window.location.pathname.push('newpsd')
                window.location = location + '/newpsd'
            },
            submit(e) {
                if (this.submitFlag) return
                this.submitFlag = true
                if (this.$v.validationGroup) {
                    fetch("/api/login/", {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/x-www-form-unlencoded',
                            'Authorization': 'Basic ' + btoa(this.emailInput + ':' + this.passwordInput)
                        }
                    }).then(res => {
                        if (res.ok) {
                            return res.json()
                        } else {
                            this.failed = true
                        }
                    })
                }
            }
        }
}
</script>
<style lang="sass">
.secret {
    width: 14px;
    height: 12px;
}

.forget {
    margin-top: 5px;
}

.fail {
    float: right;
}

.login-margin {
    margin-top: 20px;
}
</style>
