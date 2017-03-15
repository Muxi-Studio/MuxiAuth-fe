<template>
    <div>
        <div class="box box-height">
            <div class="iconbox">
                <img src="http://p1.bqimg.com/4851/b4cd511b8361c9fc.png" class="icon">
            </div>
            <input type="text" v-model.trim="emailInput" @blur="isBlur" class="inputbox" placeholder="邮箱">
        </div>
        <div v-if="!$v.emailInput.email && this.blur" class="checkemail check">邮箱格式有误</div>
        <div class="box box-height">
            <div class="iconbox">
                <img src="http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
            </div>
            <input v-model.trim="passwordInput" type="password" @blur="isBlur" class="inputbox" placeholder="密码" v-show="!showPass">
            <input v-model.trim="passwordInput" type="text" @blur="isBlur" class="inputbox" placeholder="密码" v-show="showPass">
            <div class="iconbox eye">
                <img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon">
            </div>
        </div>
        <button v-on:click="submit" class="change box-height">登录</button>
    </div>
</template>
<script>
import {
    email,
} from 'vuelidate/lib/validators'
export default {
    data() {
            return {
                emailInput: '',
                passwordInput: '',
                showPass: false,
                blur: false
            }
        },
        validations: {
            emailInput: {
                email
            }
        },
        methods: {
            isBlur() {
                this.blur = true
            },
            submit() {
                if (this.emailInput && this.passwordInput && this.$v.emailInput.email) {
                    fetch("/api/v1.0/login/", {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: this.emailInput,
                            password: this.passwordInput
                        })
                    }).then(res => {
                        return res.json()
                    }).then(res => {
                        console.log(res)
                    })
                }
                console.log(this.emailInput)
                console.log(this.passwordInput)
                console.log(this.emailInput.email)
            }
        }
}
</script>
<style>
.change {
    background-color: #fd860e;
    border: none;
    color: #ffffff;
    font-size: 14px;
    border-radius: 4px;
    border:none;
    width: 100%;
}

.change:hover {
    background-color: #df6b0f;
}

.box {
    color: #0b2029;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #737373;
    font-size: 0;
}

.inputbox {
    display: inline-block;
    background-color: transparent;
    vertical-align: middle;
}

.iconbox {
    width: 16%;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    position: relative;
}
.icon {
    width: 14px;
    height: 12px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
}

.btn {
    /*margin-top: 137px;*/
    font-size: 14px;
    border: none;
    color: #0b2029;
    background-color: transparent;
}

</style>
