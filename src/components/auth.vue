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
                <div class="tittle">
                    <router-link to="/" class="btn">登录</router-link>
                    <router-link to="/register" class="registerButton btn">注册</router-link>
                </div>
                <router-view></router-view>
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
    overflow: hidden;
}

.circle {
    width: 380px;
    height: 380px;
    margin: 15% auto;
    display: block;
}

.container {
    width: 202px;
    margin: 0 auto;
    vertical-align: middle;
}

.box-height {
    height: 30px;
    margin-top: 22px;
}

.registerButton {
    margin-left: 14px;
}

.left {
    width: 50%;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
}

.tittle {
    text-align: center;
}

.right {
    width: 50%;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
    padding: 0 13%;
}

.footer {
    height: 41px;
    background-color: #afdce1;
}

.check {
    font-size: 11px;
    color: #aa3e21;
    float: right;
}
</style>
