<template>
    <div>
        <div class="row">
            <div class="box box-height transparent">
                <div class="iconbox full-height width inline-block vertical-align">
                    <svg viewBox="0 0 200 200" class="icon">
                            <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#email"></use>
                        </svg>
                </div>
                <eInput v-model.trim="emailInput" class="inputbox transparent inline-block vertical-align"></eInput>
            </div>
            <div v-if="!$v.emailInput.email" class="check tip-color min-font">邮箱格式有误</div>
        </div>
        <div class="row">
            <div class="box box-height transparent">
                <div class="iconbox full-height width inline-block vertical-align">
                    <svg viewBox="0 0 200 200" class="icon">
                            <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#password"></use>
                        </svg>
                </div>
                <input v-model.trim="passwordInput" type="password" class="inputbox transparent inline-block vertical-align" placeholder="密码" v-show="!showPass" @focus="isFocus" @blur="isBlur">
                <input v-model.trim="passwordInput" type="text" class="inputbox transparent inline-block vertical-align" placeholder="密码" v-show="showPass" @focus="isFocus" @blur="isBlur">
                <div class="iconbox full-height eye inline-block vertical-align" v-on:click="showPass = !showPass">
                    <svg viewBox="0 0 200 200" class="icon">
                            <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#eye"></use>
                        </svg>
                </div>
            </div>
            <svg viewBox="0 0 200 200" class="secret inline-block">>
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#secret"></use>
                </svg>
            <div v-on:click="link" class="forget inline-block tip-color min-font">忘记密码？</div>
            <div v-if="this.failed" class="check inline-block fail tip-color min-font">邮箱或密码不正确</div>
        </div>
        <button v-on:click="submit" class="change box-height full-width login-margin" :style="{'background-color': this.submitFlag ? '#d2d2d2' : '#fd860e'}">登录</button>
    </div>
</template>

<script>
    import Input from './Input.vue'
    import {
        email,
        required,
        isUnique
    } from 'vuelidate/lib/validators'
    import getCookie from '../getCookie'
    
    export default {
        data() {
            return {
                emailInput: '',
                passwordInput: '',
                showPass: false,
                submitFlag: false,
                failed: false
            }
        },
        components: {
            "eInput": Input
        },
        validations: {
            emailInput: {
                email,
                required
            },
            passwordInput: {
                required
            },
            validationGroup: ['emailInput', 'passwordInput']
        },
        created() {
            this.$parent.footer_display = false
        },
        methods: {
            isFocus() {
                this.$parent.footer_display = true
                this.submitFlag = false
            },
            isBlur() {
                this.$parent.footer_display = false
            },
            link() {
                var location = window.location.pathname
                window.location.pathname += 'newpsd';
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
                    }).then(value => {
                        let landing = localStorage.getItem('landing')
                        if (landing) {
                            window.location.href = 'http://'+ landing + '?email=' + this.emailInput + '&token=' + value.token
                        }
                    })
                }
            }
        }
    }
</script>

<style lang="scss">
.secret {
    width: 14px;
    height: 12px;
}

.forget {
    margin-top: 5px;
    cursor: pointer;
}

.fail {
    float: right;
}

.login-margin {
    margin-top: 20px;
}
</style>
