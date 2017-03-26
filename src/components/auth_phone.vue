<template>
    <div class="wrap">
        <div class="header">
            <!-- <svg viewBox="0 0 200 200" class="logo">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
                </svg> -->
        </div>
        <div class="main">
            <div class="top">
                <img src="http://p1.bqimg.com/567571/8bdd1501da6373b1.png" class="circle">
                 <div class="circle">
                </div>
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
        <div class="copy">
            <div class="copyright">
                华中师范大学木犀团队
            </div>
            <div class="copyright">
                Hello from Wuhan，2014-2017 MuxiStudio
            </div>
        </div>
        <div class="footer">
            <a href="http://xueer.muxixyz.com" class="word word_change">学而</a>
            <a href="http://muxistudio.com" class="word word_change">木犀团队</a>
            <a href="http://share.muxixyz.com/" class="word word_change">木犀分享</a>
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
    position: fixed;
    top: 0;
    width: 100%;
}

.logo {
    /*width: 108px;
    margin-top: 7px;*/
}

.main {
    width: 100%;
    background-color: #ffffff;
    margin-top: 50px;
}

.top {
    height: 40%;
    padding-top: 10px;
    padding-bottom: 20px;
}

.circle {
    display: block;
    margin: 0 auto;
    height: 75%;
    width: 47%;
    background-image: url('../pictures/moblie.png')no-repeat;
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
    height: 34px;
    margin: 0 auto;
    margin-top: 18px;
}

.inputbox-width {
    width: 66%;
}

.eye {
    float: right;
    width: 10%;
}
.margin-bottom{
    margin-bottom: 100px;
}
.copy {
    position: fixed;
    bottom: 40px;
    width: 100%;
    background-color: #ffffff;
}

.copyright {
    font-size: 13px;
    text-align: center;
    color: #989f9d;
}

.footer {
    width: 100%;
    height: 43px;
    background-color: #2b2b29;
    display: flex;
    position: fixed;
    bottom: 0;
}

.word {
    flex: 1;
    line-height: 43px;
    color: #989f9d;
    text-align: center;
}

.word_change:hover {
    color: #fe850b;
}
</style>
