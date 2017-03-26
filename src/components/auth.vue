<template>
    <div class="wrap">
        <div class="content header-color">
            <div class="header" v-on:click="changeColor">
                <img src="http://p1.bpimg.com/4851/0cbf553a4e98a401.png" class="logo">
                <a href="http://share.muxixyz.com/" class="share word word_change">木犀分享</a>
                <a href="http://muxistudio.com" class="studio word word_change">木犀团队</a>
                <a href="http://xueer.muxixyz.com" class="word word_change">学而</a>
            </div>
        </div>
        <div class="content main-color">
            <div class="main">
                <div class="left">
                    <div class="circle">
                    </div>
                </div>
                <div class="right">
                    <div class="container">
                        <div class="tittle">
                            <router-link to="/" class="btn" v-on:changeColor="highlight">登录</router-link>
                            <router-link to="/register" class="registerButton btn" v-on:changeColor="highlight">注册</router-link>
                        </div>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="center">
                <div class="copyright">
                    华中师范大学木犀团队
                </div>
                <div class="copyright">
                    Hello from Wuhan，2014-2017 MuxiStudio
                </div>
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
                
            }
        },
        components: {
            "login": Login,
            "register": Register
        },
        methods: {
            changeColor: function() {
                this.$emit('changeColor')
            }
        },
        computed: {
            highlight: function(){
                
            }
        }

}
</script>
<style>
body {
    min-width: 700px;
}

.content {
    width: 100%;
    margin: 0 auto;
}

.header-color {
    background-color: #ffffff;
}

.header {
    width: 985px;
    height: 73px;
    background-color: #ffffff;
    margin: 0 auto;
}

.logo {
    width: 101px;
    height: 24px;
    margin-top: 23px;
    margin-left: 7%;
    float: left;
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
    margin-bottom: -129px;
    min-height: 100%;
    overflow: hidden;
}

.main {
    font-size: 0;
    margin: 0 auto;
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
    width: 100%;
    height: 56px;
    background-color: #afdce1;
}

.check {
    font-size: 11px;
    color: #9f442c;
    float: right;
}

.center {
    transform: translateY(7px);
    width: 985px;
    margin: 0 auto;
}

.copyright {
    text-align: center;
    color: #687b84;
    font-size: 14px;
    margin: 0 auto;
}
</style>
