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
                    <div class="buttonBox">
                        <router-link to="/phone" class="loginButton btn">登录</router-link>
                        <router-link to="/register" class="registerButton btn">注册</router-link>
                    </div>
                    <router-view></router-view>
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
    overflow: hidden;
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
    margin: 0 auto;
    width: 72%;
}

.buttonBox {
    text-align: center;
}

.loginButton {
    display: inline-block;
    margin-right: 10px;
}

.box-height {
    height: 35px;
    margin: 0 auto;
    margin-top: 14px;
}

.inputbox-width {
    width: 66%;
}

.eye {
    float: right;
}

.footer {
    width: 100%;
    height: 43px;
    background-color: #2b2b29;
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
</style>
