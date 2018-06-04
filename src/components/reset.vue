<template>
    <div>
        <div class="input-tip">
            <div class="row-line full-width">
                <div class="iconbox inline-block full-height vertical-align">
                    <svg viewBox="0 0 200 200" class="vertical-align icon-size">
                        <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#password"></use>
                    </svg>
                </div>
                <input class="transparent inline-block vertical-align inputword" v-model.trim="passwordInput" type="password" placeholder="请输入新密码">
            </div>
            <div class="find-check tip-color" v-if="!$v.passwordInput.minLength">密码请勿少于六位</div>
        </div>
        <div class="input-tip">
            <div class="row-line full-width">
                <div class="iconbox inline-block full-height vertical-align">
                    <svg viewBox="0 0 200 200" class="vertical-align icon-size">
                        <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#password"></use>
                    </svg>
                </div>
                <input class="transparent inline-block vertical-align inputword" v-model.trim="psdsecond" type="password" placeholder="请再次输入新密码">
            </div>
            <div class="find-check tip-color" v-if="!$v.psdsecond.sameAs && this.psdsecond">密码输入不一致</div>
        </div>
        <button v-on:click="submit" class="btn next vertical-align orange-color">确定</button>
    </div>
</template>
<script>
import {
    minLength,
    sameAs,
    required
} from 'vuelidate/lib/validators'
export default {
    data() {
            return {
                emailInput: '',
                captchaInput: '',
                passwordInput: '',
                psdsecond: ''
            }
        },
        validations: {
            passwordInput: {
                minLength: minLength(6),
                required
            },
            psdsecond: {
                sameAs: sameAs('passwordInput'),
                required
            },
            validationGroup: ['passwordInput', 'psdsecond']
        },
        created() {
            this.emailInput = this.$parent.message[0]
            this.captchaInput = this.$parent.message[1]
            this.$parent.reset_message = false
        },
        methods: {
            submit() {
                if (this.$v.validationGroup) {
                    fetch("/api/forgot_password/reset/", {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            new_password: this.passwordInput,
                            email: this.emailInput,
                            captcha: this.captchaInput
                        })
                    }).then(res => {
                        if (res.ok) {
                            this.$parent.reset_message = true
                            //this.$parent.check_reset();

                            setTimeout(function() {
                                let landing = localStorage.getItem('landing')
                                if (landing) {
                                    window.location.href = 'https://user.muxixyz.com/?landing='+ landing;
                                }
                            }, 1500) 
                        }
                    })
                }
            }
        }
}
</script>
<style lang="scss">
.success {
    font-size: 20px;
    color: #ac372b;
    margin-top: 30px;
}
</style>
