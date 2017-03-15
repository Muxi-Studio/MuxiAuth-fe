<template>
    <div>
        <div class="box box-height">
            <div class="iconbox">
                <img src="http://p1.bqimg.com/4851/b4cd511b8361c9fc.png" class="icon">
            </div>
            <input type="text" v-model.trim="emailInput" @blur="isBlur" class="inputbox" placeholder="邮箱">
        </div>
        <div v-if="!$v.emailInput.email && this.blur" class="check">邮箱格式有误</div>
        <div class="box box-height">
            <div class="iconbox">
                <img src="http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
            </div>
            <input v-model.trim="passwordInput" type="password" class="inputbox" placeholder="密码(不少于六位)" v-show="!showPass">
            <input v-model.trim="passwordInput" type="text" class="inputbox" placeholder="密码(不少于六位)" v-show="showPass">
            <div class="iconbox eye">
                <img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon">
            </div>
        </div>
        <div class="check" v-if="!$v.passwordInput.minLength">密码请勿少于六位</div>
        <div class="box box-height">
            <div class="iconbox">
                <img src="http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
            </div>
            <input v-model.trim="psdsecond" class="inputbox" type="password" placeholder="再次输入密码" v-show="!showPass">
            <input v-model.trim="psdsecond" class="inputbox" type="text" placeholder="再次输入密码" v-show="showPass">
            <div class="iconbox  eye">
                <img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon ">
            </div>
        </div>
        <div class="check" v-if="!$v.psdsecond.sameAs && this.psdsecond">密码输入不一致</div>
        <button v-on:click="submit" class="change box-height">注册</button>
    </div>
</template>
<script>
import {
    email,
    minLength,
    sameAs
} from 'vuelidate/lib/validators'
export default {
    data() {
            return {
                emailInput: '',
                passwordInput: '',
                psdsecond: '',
                showPass: false,
                blur: false

            }
        },
        validations: {
            emailInput: {
                email
            },
            passwordInput: {
                minLength: minLength(6)
            },
            psdsecond: {
                sameAs: sameAs("passwordInput")
            }
        },
        methods: {
            isBlur() {
                this.blur = true
            },
            submit() {
                if (this.emailInput && this.$v.emailInput.email && this.passwordInput && this.$v.passwordInput.minLength && this.$v.psdsecond.sameAs) {
                    fetch("/api/v1.0/register/", {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: this.emailInput,
                            password: this.passwordInput
                        })
                    })
                }
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
    border: none;
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
    clear: both;
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

.check {
    font-size: 11px;
    color: #aa3e21;
    float: right;
}
</style>
