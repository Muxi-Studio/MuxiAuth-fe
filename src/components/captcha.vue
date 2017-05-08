<template>
    <div>
        <div class="row">
            <div class="iconbox inline-block">
                <svg viewBox="0 0 200 200" class="vertical-align icon-size">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#email"></use>
                </svg>
            </div>
            <input type="text" v-model.trim="emailInput" @blur="isBlur" class="transparent inline-block vertical-align inputword" placeholder="请填写邮箱地址">
            <div class="inline-block">
                <sendcode :start='start' @countDown='start=false' @click.native='sendCode'></sendcode>
            </div>
        </div>
        <div class="height">
            <div v-if="$v.emailInput.email && $v.emailInput.required && !this.email_exist && this.blur" class="check">您输入的账号不存在，请重新输入
            </div>
            <div v-if="!$v.emailInput.email && this.blur" class="check">邮箱格式有误</div>
        </div>
        <div class="row">
            <div class="iconbox inline-block">
                <svg viewBox="0 0 200 200" class="vertical-align icon-size">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#captcha"></use>
                </svg>
            </div>
            <input type="text" v-model.trim="captchaInput" class="transparent inline-block vertical-align inputword" placeholder="输入验证码">
        </div>
        <button type="submit" class="btn next">下一步</button>
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
                email_exist: true,
                start: false,
                flag : false
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
                if (this.$v.emailInput.email && this.$v.emailInput.required) {
                    fetch("/api/email_exists/?email=" + this.emailInput, {}).then(res => {
                        if (res.ok) {
                            this.email_exist = false
                        } else {
                            this.email_exist = true
                        }
                    })
                }
            },
            sendCode(value) {
                value.stopPropagation()
                value.preventDefault();
                if (this.$v.emailInput.email && this.email_exist) {
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
                            // this.flag = true               
                        }
                    })
                }
            }
        }
}
</script>
<style>
.height {
    height: 30px;
}

.icon-size {
    width: 25px;
    height: 25px;
    transform: translateX(50%);
}
.next{
    margin-top: 20px;
    float: right;
}
</style>
