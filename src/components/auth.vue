<template>
    <div class="wrap">
        <div class="header">
            <img src="http://p1.bpimg.com/4851/0cbf553a4e98a401.png" class="logo">
            <a href="http://share.muxixyz.com/" class="share word">木犀分享</a>
            <a href="http://muxistudio.com" class="studio word">木犀团队</a>
            <a href="http://xueer.muxixyz.com" class="word">学而</a>
        </div>
        <div class="main">
            <div class="left">
                <img src="http://p1.bpimg.com/4851/1b5d2b9c20befb88.png" class="circle">
            </div>
            <div class="right">
                <div class="container">
                    <div id="auth">
                        <router-link to="/" class="loginButton btn">登录</router-link>
                        <router-link to="/register" class="registerButton btn">注册</router-link>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>
<script>
import Login from './login.vue'
import Register from './register.vue'
export default {
    components: {
        "login": Login,
        "register": Register
    },
    data() {
        return {}
    },
    directives: {
        blur: blur
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

.studio {
    margin-left: 40px;
}

.share {
    margin-left: 40px;
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
    padding-top: 150px;
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
    margin-left: 60px;
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
    height: 41px;
    background-color: #afdce1;
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
