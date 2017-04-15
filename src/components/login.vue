<template>
    <div>
        <div class="box box-height transparent">
            <div class="iconbox full-height width inline-block vertical-align">
                <svg viewBox="0 0 200 200" class="icon">>
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#email"></use>
                </svg>
            </div>
            <input type="text" v-model.trim="emailInput" @focus="isFocus" @blur="isBlur" class="transparent inline-block vertical-align" placeholder="邮箱">
        </div>
        <div class="height">
            <div v-if="$v.emailInput.email && $v.emailInput.required && !this.email_exit && !this.blur" class="check tip-font">邮箱不存在
            </div>
            <div v-if="!$v.emailInput.email && this.blur " class="check tip-font">邮箱格式有误</div>
        </div>
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
        <div class="height">
            <svg viewBox="0 0 200 200" class="secret inline-block">>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#secret"></use>
            </svg>
            <a href="/newpsd" class="forget inline-block tip-font">忘记密码？</a>
            <div v-if="failed" class="check tip-font">邮箱或密码不正确</div>
        </div>
        <button v-on:click="submit" class="change box-height full-width" :style="changedButton">登录</button>
    </div>
</template>
<script>
import {
    email,
    required
} from 'vuelidate/lib/validators'
export default {
    data() {
            return {
                emailInput: '',
                passwordInput: '',
                showPass: false,
                focus: false,
                submitFlag: false,
                failed: false,
                blur: false,
                email_exit: false
            }
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
        computed: {
            changedButton: function() {
                return {
                    'background-color': this.submitFlag ? 'grey' : '#fd860e'
                }
            }
        },
        methods: {
            isBlur() {
                this.blur = true
                if (this.$v.emailInput.email) {
                    fetch("https://user.muxixyz.com/api/email_exists/?email=" + this.emailInput, {}).then(res => {
                        if (res.ok) {
                            this.email_exit = true
                        }
                    })
                }
            },
            isFocus() {
                this.submitFlag = false
                this.focus = true
            },
            submit() {
                if (this.submitFlag) return
                this.submitFlag = true
                if (this.$v.validationGroup && this.email_exit) {
                    fetch("https://user.muxixyz.com/api/login/", {
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
                    }).then(res => {
                        console.log(res)
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
    color: #aa3e21;
    margin-top: 5px;
}
</style>
