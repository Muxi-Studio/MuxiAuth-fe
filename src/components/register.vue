<template>
    <div>
        <div class="box box-height transparent">
            <div class="iconbox width inline-block vertical-align">
                <svg viewBox="0 0 200 200" class="icon">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#username"></use>
                </svg>
            </div>
            <input type="text" v-model.trim="username" @focus="isFocus" @blur="userBlur" class="inputbox transparent inline-block vertical-align" placeholder="用户名(不超过八个字符)">
        </div>
        <div v-if="$v.username.required && !this.username_exit" class="check">用户名已注册
        </div>
        <div v-if="!$v.username.maxLength && !$v.username.required" class="check">不超过八个字符
        </div>
        <div class="box box-height transparent">
            <div class="iconbox width inline-block vertical-align">
                <svg viewBox="0 0 200 200" class="icon">>
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#email"></use>
                </svg>
            </div>
            <input type="text" v-model.trim="emailInput" @blur="isBlur" @focus="isFocus" class="inputbox transparent inline-block vertical-align" placeholder="邮箱">
        </div>
        <div v-if="!this.email_exit && this.blur && $v.emailInput.required" class="check">邮箱已注册
        </div>
        <div v-if="!$v.emailInput.email && this.blur" class="check">邮箱格式不正确</div>
        <div class="box box-height transparent">
            <div class="iconbox width inline-block vertical-align">
                <svg viewBox="0 0 200 200" class="icon">>
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#password"></use>
                </svg>
            </div>
            <input v-model.trim="passwordInput" @focus="isFocus" type="password" class="inputbox transparent inline-block vertical-align" placeholder="密码(不少于六位)" v-show="!showPass">
            <input v-model.trim="passwordInput" @focus="isFocus" type="text" class="inputbox transparent inline-block vertical-align" placeholder="密码(不少于六位)" v-show="showPass">
            <div class="iconbox eye inline-block vertical-align" v-on:click="showPass = !showPass">
                <svg viewBox="0 0 200 200" class="icon">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#eye"></use>
                </svg>
            </div>
        </div>
        <div class="check" v-if="!$v.passwordInput.minLength">密码请勿少于六位</div>
        <div class="box box-height transparent">
            <div class="iconbox width inline-block vertical-align">
                <svg viewBox="0 0 200 200" class="icon">>
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#password"></use>
                </svg>
            </div>
            <input v-model.trim="psdsecond" class="inputbox transparent inline-block vertical-align" type="password" placeholder="再次输入密码" v-show="!showPass">
            <input v-model.trim="psdsecond" class="inputbox transparent inline-block vertical-align" type="text" placeholder="再次输入密码" v-show="showPass">
            <div class="iconbox  eye inline-block vertical-align" v-on:click="showPass = !showPass">
                <svg viewBox="0 0 200 200" class="icon">
                    <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#eye"></use>
                </svg>
            </div>
        </div>
        <div class="height">
            <div class="check" v-if="!$v.psdsecond.sameAs && this.psdsecond">密码输入不一致</div>
        </div>
        <button v-on:click="submit" class="change box-height margin-bottom" :style="changedButton">注册</button>
    </div>
</template>
<script>
import {
    email,
    minLength,
    maxLength,
    sameAs,
    required
} from 'vuelidate/lib/validators'
export default {
    data() {
            return {
                username: '',
                emailInput: '',
                passwordInput: '',
                psdsecond: '',
                focus: false,
                email_exit: false,
                showPass: false,
                blur: false,
                submitFlag: false,
                username_exit: false
            }
        },
        validations: {
            username: {
                maxLength: maxLength(8),
                required
            },
            emailInput: {
                email,
                required
            },
            passwordInput: {
                minLength: minLength(6),
                required
            },
            psdsecond: {
                sameAs: sameAs("passwordInput"),
                required
            },
            validationGroup: ['username', 'emailInput', 'passwordInput', 'psdsecond']
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
                    fetch("https://user.muxixyz.com/api/email_exists/?email=" + this.emailInput, {}).then(res => {
                        if (res.ok) {
                            this.email_exit = true
                        }
                    })
                }
            },
            userBlur() {
                if (this.$v.username.maxLength) {
                    fetch("https://user.muxixyz.com/api/username_exists/?username=" + this.username, {}).then(res => {
                        if (res.ok) {
                            this.username_exit = true
                        }
                    })
                }
            },
            isFocus() {
                this.submitFlag = false
                this.focus = true
            },
            submit() {
                console.log(this.$v.validationGroup.username)
                if (this.submitFlag) return
                this.submitFlag = true
                if (this.$v.validationGroup && this.username_exit && this.email_exit) {
                    fetch("https://user.muxixyz.com/api/register/", {
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
                        }
                    })
                }
            }
        }
}
</script>
<style scoped>
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
    border-radius: 4px;
    border: 1px solid #737373;
    font-size: 0;
    clear: both;
}

.inputbox {
    width: 65%;
}

.width {
    width: 16%;
}

.iconbox {
    height: 100%;
    position: relative;
}

.icon {
    width: 17px;
    height: 17px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
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
