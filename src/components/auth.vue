<template>
    <div class="wrap">
        <div class="full-width header-color">
            <div class="header margin">
                <svg class="logo">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo">
                    </use>
                </svg>
                <a href="http://share.muxixyz.com/" class="share word word_change">木犀分享</a>
                <a href="http://muxistudio.com" class="studio word word_change">木犀团队</a>
                <a href="http://xueer.muxixyz.com" class="word word_change">学而</a>
            </div>
        </div>
        <div class="full-width main-color">
            <div class="main margin">
                <div class="left-right inline-block vertical-align">
                    <div class="circle">
                    </div>
                </div>
                <div class="right left-right inline-block vertical-align">
                    <div class="container vertical-align margin">
                        <div class="text-align">
                            <router-link to="/" class="btn">
                                <a v-on:click="tologin" v-bind:class="{highlight: login}">登录</a>
                            </router-link>
                            <router-link to="/register" class="registerButton btn">
                                <a v-on:click="toregister" v-bind:class="{ highlight: !login}">注册</a>
                            </router-link>
                        </div>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer full-width">
            <div class="center margin">
                <div class="copyright text-align">
                    华中师范大学木犀团队
                </div>
                <div class="copyright text-align">
                    Hello from Wuhan，2014-2017 MuxiStudio
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Login from './login.vue'
import Register from './register.vue'

export default {
    data() {
            return {
                login: true
            }
        },
        components: {
            "login": Login,
            "register": Register
        },
        methods: {
            tologin: function() {
                this.login = true
            },
            toregister: function() {
                this.login = false
            }
        }
}
</script>
<style>
body {
    min-width: 700px;
}

.highlight {
    color: #0b2029;
}

.header-color {
    background-color: #ffffff;
}

.header {
    width: 985px;
    height: 73px;
    background-color: #ffffff;
}

.logo {
    width: 130px;
    height: 30px;
    margin-top: 23px;
    margin-left: 7%;
    float: left;
}

.btn {
    font-size: 14px;
    border: none;
    color: #878583;
    background-color: transparent;
}

.eye {
    width: 20px;
}

.word {
    line-height: 73px;
    font-size: 15px;
    float: right;
}

.word_change:hover {
    color: #ff850c;
}

.studio {
    margin-left: 40px;
}

.share {
    margin-left: 40px;
    margin-right: 120px;
}

.main-color {
    background-color: #f4f7ed;
    overflow: hidden;
    height: 100%;
}

.main {
    font-size: 0;
    width: 985px;
}

.circle {
    width: 380px;
    height: 380px;
    margin: 15% auto;
    display: block;
    background-image: url('../pictures/circle.png');
}

.container {
    width: 202px;
}

.box-height {
    height: 30px;
    margin-top: 22px;
}

.registerButton {
    margin-left: 14px;
}

.psd-height {
    height: 30px;
}

.right {
    box-sizing: border-box;
    padding: 0 13%;
}

.footer {
    height: 56px;
    background-color: #afdce1;
    position: fixed;
    bottom: 0;
}

.check {
    font-size: 11px;
    color: #9f442c;
    float: right;
}

.center {
    transform: translateY(7px);
    width: 985px;
}

.copyright {
    color: #687b84;
    font-size: 14px;
}
</style>
