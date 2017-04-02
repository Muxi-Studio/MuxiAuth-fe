<template>
    <div>
        <div class="box box-height">
            <div class="iconbox width">
                <svg viewBox="0 0 200 200" class="icon">>
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#email"></use>
                </svg>
            </div>
            <input type="text" v-model.trim="emailInput" @focus="isFocus" @blur="isBlur" class="inputbox" placeholder="邮箱">
        </div>
        <div class="height">
            <div v-if="$v.emailInput.email && $v.emailInput.require && !this.email_exit && this.blur" class="check">邮箱不存在
            </div>
            <div v-if="!$v.emailInput.email && this.blur " class="check">邮箱格式有误</div>
        </div>
        <div class="box box-height">
            <div class="iconbox width">
                <svg viewBox="0 0 200 200" class="icon">>
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#password"></use>
                </svg>
            </div>
            <input v-model.trim="passwordInput" type="password" class="inputbox" placeholder="密码" v-show="!showPass" @focus="isFocus">
            <input v-model.trim="passwordInput" type="text" class="inputbox" placeholder="密码" v-show="showPass" @focus="isFocus">
            <div class="iconbox  eye" v-on:click="showPass = !showPass">
                <svg viewBox="0 0 200 200" class="icon">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#eye"></use>
                </svg>
            </div>
        </div>
        <div class="height">
            <svg viewBox="0 0 200 200" class="secret">>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#secret"></use>
            </svg>
            <div class="forget">忘记密码？</div>
            <div v-if="failed" class="check">邮箱或密码不正确</div>
        </div>
        <button v-on:click="submit" class="change box-height" :style="changedButton">登录</button>
    </div>
</template>
<script>
import {
    email,
    require
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
                require
            },
            passwordInput: {
                require
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
                    fetch("http://user.muxixyz.com/api/email_exists/?email=" + this.emailInput, {}).then(res => {
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
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    position: relative;
}

.width {
    width: 16%;
}

.icon {
    width: 14px;
    height: 12px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
}

.secret {
    width: 14px;
    height: 12px;
    display: inline-block;
}

.forget {
    font-size: 11px;
    display: inline-block;
    color: #aa3e21;
}
</style>
