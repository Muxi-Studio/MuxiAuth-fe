<template>
    <div>
        <div class="row-line full-width">
            <div class="iconbox inline-block full-height vertical-align">
                <svg viewBox="0 0 200 200" class="icon">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#password"></use>
                </svg>
            </div>
            <input v-model.trim="passwordInput" type="password" placeholder="请输入新密码">
        </div>
        <div class="check" v-if="!$v.passwordInput.minLength">密码请勿少于六位</div>
        <div class="row-line full-width">
            <div class="iconbox inline-block full-height vertical-align">
                <svg viewBox="0 0 200 200" class="icon">>
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#password"></use>
                </svg>
            </div>
            <input v-model.trim="psdsecond" type="password" placeholder="请再次输入新密码">
        </div>
        <div class="check" v-if="!$v.psdsecond.sameAs && this.psdsecond">密码输入不一致</div>
        <button v-on:click="submit" class="btn next vertical-align">确定</button>
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
                passwordInput: '',
                psdsecond: '',
                success: false
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
                            new_password: this.passwordInput
                        })
                    }).then(res => {
                        if (res.ok) {
                            this.success = true
                        }
                    })
                }
            }
        }
}
</script>
