<template>
    <div>
        <div class="box box-height">
            <div class="iconbox">
                <img src="http://p1.bqimg.com/4851/b4cd511b8361c9fc.png" class="icon">
            </div>
            <input type="text" v-model.trim="emailInput" @focus="isFocus" @blur="isBlur" class="inputbox" placeholder="邮箱">
        </div>
        <div class="height">
            <div v-if="email_exit" class="checkemail check">邮箱不存在</div>
            <div v-if="!$v.emailInput.email && this.blur " class="checkemail check">邮箱格式有误</div>
        </div>
        
        <div class="box box-height">
            <div class="iconbox">
                <img src="http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
            </div>
            <input v-model.trim="passwordInput" type="password" class="inputbox" placeholder="密码" v-show="!showPass" @focus="isFocus">
            <input v-model.trim="passwordInput" type="text" class="inputbox" placeholder="密码" v-show="showPass" @focus="isFocus">
            <div class="iconbox eye" v-on:click="showPass = !showPass">
                <img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon">
            </div>
        </div>
        <div class="height">
            <div v-if="failed" class="checkemail check">密码不正确</div>
        </div>
        <button v-on:click="submit" class="change box-height" :style="changedButton">登录</button>
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
                focus: false,
                submitFlag: false,
                failed: false,
                blur: false,
                email_exit: false
            }
        },
        validations: {
            emailInput: {
                email
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
                if (this.emailInput && this.passwordInput && this.$v.emailInput.email) {
                    fetch("http://user.muxixyz.com/api/email_exists/?email=xxx@qq.com", {
                            method: 'GET'
                        }).then(res => {
                            if(res.ok){
                                this.email_exit = true
                            }
                        }),
                        fetch("http://user.muxixyz.com/api/login/", {
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
<style>
.change {
    color: #ffffff;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    width: 100%;
}

.height {
    height: 17px;
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
    font-size: 14px;
    border: none;
    color: #0b2029;
    background-color: transparent;
}
</style>
