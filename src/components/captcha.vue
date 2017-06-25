<template>
    <div>
        <div class="input-tip">
            <div class="row-line full-width">
                <div class="iconbox inline-block full-height vertical-align">
                    <svg viewBox="0 0 200 200" class="vertical-align icon-size">
                        <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#email"></use>
                    </svg>
                </div>
                <eInput v-model.trim="emailInput" class="transparent inline-block vertical-align inputword"></eInput>
                <sendcode :start='start' @countDown='start=false' @click.native='sendCode' class="inline-block vertical-align code-box"></sendcode>
            </div>
            <div v-if="$v.emailInput.email && $v.emailInput.required && $v.emailInput.isUnique" class="find-check tip-color">您输入的账号不存在，请重新输入
            </div>
            <div v-if="!$v.emailInput.email" class="find-check tip-color">邮箱格式有误</div>
        </div>
        <div class="input-tip">
            <div class="row-line full-width">
                <div class="iconbox inline-block full-height vertical-align">
                    <svg viewBox="0 0 200 200" class="vertical-align icon-size">
                        <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#captcha"></use>
                    </svg>
                </div>
                <input type="text" v-model.trim="captchaInput" class="transparent inline-block vertical-align inputword" placeholder="输入验证码">
            </div>
            <div v-if="this.wrong" class="find-check tip-color">验证码错误</div>
        </div>
        <button v-on:click="next" class="btn next vertical-align" :style="{'background-color': this.code && this.captchaInput ? '#ff860d':'#d2d2d2' }">下一步</button>
    </div>
</template>
<script>
import sendcode from './sendcode.vue'
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
                captchaInput: '',
                start: false,
                code: false,
                wrong: false
            }
        },
        components: {
            "eInput": Input,
            "sendcode": sendcode
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
            }
        },
        created() {
            this.$parent.message = []
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
            sendCode(value) {
                value.stopPropagation();
                value.preventDefault();
                if (this.$v.emailInput) {
                    fetch("/api/forgot_password/get_captcha/", {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: this.emailInput
                        })
                    }).then(res => {
                        if (res.ok) {
                            this.start = true
                            this.code = true
                        }
                    })
                }
            },
            next() {
                this.$parent.message.push(this.emailInput)
                this.$parent.message.push(this.captchaInput)
                this.$router.push('reset')
                    // if (this.code && this.captchaInput) {
                    //     fetch("/api/forgot_password/check_captcha/", {
                    //         method: 'POST',
                    //         headers: {
                    //             'Accept': 'application/json',
                    //             'Content-Type': 'application/json'
                    //         },
                    //         body: JSON.stringify({
                    //             email: this.emailInput,
                    //             captcha: this.captchaInput
                    //         })
                    //     }).then(res => {
                    //         if (res.ok) {
                    //             this.$parent.message.push(this.emailInput)
                    //             this.$parent.message.push(this.captchaInput)
                    //             this.$router.push('reset')
                    //         } else {
                    //             this.wrong = true
                    //         }
                    //     })
                    // }

            }
        }
}
</script>
<style>
</style>
