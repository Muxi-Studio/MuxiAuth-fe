<template>
    <div class="wrap">
        <div class="header">
            <img src="http://p1.bqimg.com/567571/2c7c44100e48ca4e.png" class="logo">
        </div>
        <div class="main">
            <div class="top">
                <img src="http://p1.bqimg.com/567571/8bdd1501da6373b1.png" class="circle">
            </div>
            <div class="bottom">
                <div class="container">
                    <div id="auth_phone">
                        <router-link to="/" class="loginButton btn">登录</router-link>
                        <router-link to="/register" class="registerButton btn">注册</router-link>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <a href="http://xueer.muxixyz.com" class="xueer word">学而</a>
            <a href="http://muxistudio.com" class="word">木犀团队</a>
            <a href="http://share.muxixyz.com/" class="word">木犀分享</a>
        </div>
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
    min-width: 300px;
}

.header {
    background-color: rgba(251, 247, 213, 0.99);
    height: 37px;
    text-align: center;
}

.logo {
    width: 108px;
    margin-top: 7px;
}

.main {
    width: 100%;
    background-color: #ffffff;
    min-height: 100%;
    margin-bottom: -80px;
}

.top {
    height: 40%;
    padding: 20px;
}

.circle {
    display: block;
    margin: 0 auto;
    height: 75%;
    width: 47%;
}

.bottom {
    width: 100%;
    height: 60%;
}

.container {
    font-size: 18px;
    color: rgba(71, 70, 68, 0.99);
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

.loginButton {
    display: inline-block;
    margin-right: 10px;
}

.btn {
    font-size: 14px;
    border: none;
    color: #0b2029;
    background-color: transparent;
}

.box {
    color: #0b2029;
    background-color: transparent;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #737373;
    width: 72%;
    margin: 14px auto;
    display: block;
    font-size: 0;
}

.inputbox {
    display: inline-block;
    vertical-align: middle;
    width: 66%;
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
    /*margin-top: calc(50% - 10px);*/
    /*margin-left: calc(50% - 7px);*/
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
}

.change {
    background-color: rgba(255, 133, 12, 0.99);
    color: #ffffff;
    font-size: 18px;
    border: none;
}

.change:hover {
    background-color: #df6b0f;
}

.footer {
    width: 100%;
    height: 43px;
    background-color: #2b2b29;
    margin-bottom: 0;
    display: flex;
}

.word {
    flex: 1;
    line-height: 43px;
    color: #9ac2c6;
}

.xueer {
    margin-left: 10%;
}

.check {
    font-size: 11px;
    color: #aa3e21;
    margin-left: 14%;
}
</style>
