<template>
    <div>
        <div class="row">
            <div class="iconbox inline-block">
                <svg viewBox="0 0 200 200" class="icon">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#email"></use>
                </svg>
            </div>
            <input type="text" v-model.trim="emailInput" @blur="isBlur" class="transparent inline-block vertical-align inputword" placeholder="请填写邮箱地址">
            <sendcode :start='start' @countDown ='start=false' @click.native='sendCode'></sendcode>
        </div>
        <div class="height">
            <div v-if="$v.emailInput.email && $v.emailInput.required && !this.email_exit && !this.blur" class="check">您输入的账号不存在，请重新输入
            </div>
            <div v-if="!$v.emailInput.email && this.blur" class="check">邮箱格式有误</div>
        </div>
        <div class="row">
            <div class="iconbox inline-block">
                <svg viewBox="0 0 200 200" class="icon">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#captcha"></use>
                </svg>
            </div>
            <input type="text" v-model.trim="captchaInput" class="transparent inline-block vertical-align inputword" placeholder="输入验证码">
        </div>
    </div>
</template>
<script>
import sendcode from './sendcode.vue'
import {
    email,
    required
} from 'vuelidate/lib/validators'
export default {
    data() {
            return {
                emailInput: '',
                captchaInput: '',
                blur: false,
                email_exit: false,
                start: false
            }
        },
        components: {
            "sendcode": sendcode
        },
        validations: {
            emailInput: {
                email,
                required
            }
        },
        methods: {
            isBlur() {
                this.blur = true
                console.log("this.$v.emailInput.email", this.$v.emailInput.email);
                if (this.$v.emailInput.email) {
                    fetch("http://user.muxixyz.com/api/email_exists/?email=" + this.emailInput, {}).then(res => {
                        if (res.ok) {
                            this.email_exit = true
                        }
                    })
                }
            },
            sendCode(value) {
                //前面发送ajax请求成功之后调用this.start = true开始短信倒计时
                this.start = true
            }
        }
}
</script>
<style scoped>
.height {
    height: 30px;
}
</style>
