<template>
    <div>
        <div class="box box-height">
            <div class="iconbox">
                <img src="http://p1.bqimg.com/4851/b4cd511b8361c9fc.png" class="icon">
            </div>
            <input type="text" v-model.trim="username" @focus="isFocus" class="inputbox" placeholder="用户名(不超过八个字符)">
        </div>
        <div v-if="!$v.username.maxLength && this.username" class="check">不超过八个字符</div>
        <div class="box box-height">
            <div class="iconbox">
                <img src="http://p1.bqimg.com/4851/b4cd511b8361c9fc.png" class="icon">
            </div>
            <input type="text" v-model.trim="emailInput" @blur="isBlur" @focus="isFocus" class="inputbox" placeholder="邮箱">
        </div>
        <div v-if="!$v.emailInput.email && this.blur" class="check">邮箱格式有误</div>
        <div class="box box-height">
            <div class="iconbox">
                <img src="http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
            </div>
            <input v-model.trim="passwordInput" @focus="isFocus" type="password" class="inputbox" placeholder="密码(不少于六位)" v-show="!showPass">
            <input v-model.trim="passwordInput" @focus="isFocus" type="text" class="inputbox" placeholder="密码(不少于六位)" v-show="showPass">
            <div class="iconbox eye" v-on:click="showPass = !showPass">
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
            <div class="iconbox  eye" v-on:click="showPass = !showPass">
                <img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon ">
            </div>
        </div>
        <div class="height">
            <div class="check" v-if="!$v.psdsecond.sameAs && this.psdsecond">密码输入不一致</div>
            <div v-if="failed" class="checkemail check">用户名或邮箱已被注册</div>
        </div>
        <button v-on:click="submit" class="change box-height" :style="changedButton">注册</button>
    </div>
</template>
<script>
import {
    email,
    minLength,
    maxLength,
    sameAs
} from 'vuelidate/lib/validators'
export default {
    data() {
            return {
                username: '',
                emailInput: '',
                passwordInput: '',
                psdsecond: '',
                focus: false,
                failed: false,
                showPass: false,
                blur: false,
                submitFlag: false
            }
        },
        validations: {
            username: {
                maxLength: maxLength(8)
            },
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
            },
            isFocus() {
                this.submitFlag = false
                this.focus = true
            },
            submit() {
                if (this.submitFlag) return
                this.submitFlag = true
                if (this.username && this.$v.username.maxLength && this.emailInput && this.$v.emailInput.email && this.passwordInput && this.$v.passwordInput.minLength && this.$v.psdsecond.sameAs) {
                    fetch("http://user.muxixyz.com/api/username_exists/?username=" + this.username,{
                        
                    })

                    fetch("http://user.muxixyz.com/api/register/", {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: this.username,
                            email: this.emailInput,
                            password: this.passwordInput
                        })
                    }).then(res => {
                        if (res.ok) {
                            window.location = "/"
                        } else {
                            this.failed = true
                        }
                    }).then(res => {

                    })
                }
            }
        }
}
</script>
<style>
.change {
    background-color: #fd860e;
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
    width: 65%;
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

.height {
    height: 17px;
}
</style>
