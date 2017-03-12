<template>
    <div class="wrap">
        <div class="header">
            <img src="http://p1.bpimg.com/4851/0cbf553a4e98a401.png" class="logo">
            <a href="http://share.muxixyz.com/" class="share word">木犀分享</a>
            <a href="http://muxistudio.com" class="studio word">木犀团队</a>
            <a href="http://xueer.muxixyz.com" class="xueer word">学而</a>
        </div>
        <div class="main">
            <div class="left">
                <img src="http://p1.bpimg.com/4851/1b5d2b9c20befb88.png" class="circle">
            </div>
            <div class="right">
                <div class="container">
                    <div id="auth">
                        <router-link to="/login" class="loginButton btn">登录</router-link>
                        <router-link to="/register" class="registerButton btn">注册</router-link>
                        <router-view></router-view>
                    </div>
                    <!--                     
                    <button class="loginButton btn" v-on:click="onLogin">登录
                    </button>
                    <button class="registerButton btn" v-on:click="onRegister">注册
                    </button>
                    <div class="box">
                        <div class="iconbox">
                            <img src="http://p1.bqimg.com/4851/b4cd511b8361c9fc.png" class="icon">
                        </div>
                        <input v-model="message.emailInput" class="inputbox" id="emailInput" type="text" placeholder="邮箱" v-blur="alertmessage">
                    </div>
                    <div class="checkemail check" v-show="result">邮箱格式有误
                    </div>
                    <div class="box">
                        <div class="iconbox">
                            <img src="http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
                        </div>
                        <input v-model="message.passwordInput" class="inputbox" type="password" placeholder="密码(不少于六位）" v-blur="alertmessage" id="passwordInput" v-show="!showPass">
                        <input v-model="message.passwordInput" class="inputbox" type="text" placeholder="密码(不少于六位）" v-blur="alertmessage" id="passwordInput" v-show="showPass">
                        <div class="iconbox">
                            <img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon" v-on:click="showPass = !showPass">
                        </div>
                    </div>
                    <div class="checkpsd check" v-show="checklength">密码请勿少于六位</div>
                    <div v-show="login" class="box">
                        <div class="iconbox">
                            <img src="http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
                        </div>
                        <input v-model="message.psdsecond" class="inputbox" type="password" placeholder="再次输入密码" v-blur="alertmessage" id="psdsecond" v-show="!showPass">
                        <input v-model="message.psdsecond" class="inputbox" type="text" placeholder="再次输入密码" v-blur="alertmessage" id="psdsecond" v-show="showPass">
                        <div class="iconbox">
                            <img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon" v-on:click="showPass = !showPass">
                        </div>
                    </div>
                    <div class="match check" v-show="checkmatch">密码输入不一致</div>
                    <button v-on:click="submit" class="change box">{{submitWord}}</button>
                </div>
                </div> -->
                </div>
                <div class="footer"></div>
            </div>
        </div>
    </div>
</template>
<script>
import blur from '../directives/blur.js'
import Login from './login.vue'

export default {
    components: {
        "login": Login
    },
    data() {
        return {}
    },
    directives: {
        blur: blur
    },
    methods: {
        submit() {
            if (this.login) {
                fetch("/api/v1.0/register/", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.message.emailInput,
                        password: this.message.passwordInput
                    })
                })
            }
            if (!this.login) {
                fetch("/api/v1.0/login/", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.message.emailInput,
                        password: this.message.passwordInput
                    })
                }).then(res => {
                    return res.json()
                }).then(res => {
                    console.log(res)
                        //this.token = res.token

                })
            }
        }
    }
}
</script>
<style>
body {
    min-width: 700px;
}

.header {
    width: 100%;
    height: 73px;
    background-color: #ffffff;
}

.logo {
    width: 101px;
    height: 24px;
    margin-top: 23px;
    margin-left: 92px;
    float: left;
}

.word {
    line-height: 73px;
    font-size: 15px;
    font-family: "Adobe Heiti Std";
    float: right;
}

.xueer {
    /*margin-left: 400px;*/
    /*float: right;*/
}

.studio {
    margin-left: 40px;
    /*float: right;*/
}

.share {
    margin-left: 40px;
    /*float: right;*/
    margin-right: 184px;
}

.main {
    width: 100%;
    background-color: #f4f7ed;
    font-family: "FZLTZHK";
    font-size: 0;
    min-height: 100%;
    margin-bottom: -114px;
}

.circle {
    width: 380px;
    height: 380px;
    margin: 15% auto;
    display: block;
}

.container {
    width: 202px;
    display: block;
    margin: 0 auto;
}

.btn {
    margin-top: 137px;
    font-size: 14px;
    border: none;
    color: #0b2029;
    background-color: transparent;
}

.box {
    width: 202px;
    height: 30px;
    border-radius: 4px;
    margin-top: 22px;
    font-size: 0;
    border: 1px solid #737373;
}

.loginButton {
    margin-left: 50px;
}

.registerButton {
    margin-left: 14px;
}

.change {
    background-color: #fd860e;
    border: none;
    color: #ffffff;
    font-size: 14px;
}

.change:hover {
    background-color: #df6b0f;
}

.left {
    width: 50%;
    height: 100%;
    display: inline-block;
}

.right {
    width: 50%;
    height: 100%;
    float: right;
}

.footer {
    /*width: 100%;*/
    height: 41px;
    background-color: #afdce1;
    /*margin-bottom: 0;*/
}
.inputbox {
    display: inline-block;
    height: 100%;
    background-color: transparent;
    vertical-align: middle;
}

.checkemail {
    margin-left: 130px;
}

.check {
    font-size: 11px;
    color: #aa3e21;
    margin-top: 0;
}

.iconbox {
    width: 34px;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
}

.icon {
    width: 14px;
    height: 12px;
    margin: 8px;
}

.checkpsd {
    margin-left: 100px;
}

.match {
    margin-left: 110px;
}
</style>
