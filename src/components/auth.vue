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
                        <div class="text-align router-margin">
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
<style lang="sass">
@import '../pc.scss';

.highlight {
    color: #0b2029;
}

.btn {
    font-size: 14px;
    border: none;
    color: #878583;
    background-color: transparent;
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
}

.registerButton {
    margin-left: 14px;
}

.right {
    box-sizing: border-box;
    padding: 0 13%;
}

.eye {
    width: 20px;
}
</style>
