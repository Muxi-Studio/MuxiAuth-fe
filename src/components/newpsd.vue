<template>
    <div class="wrap">
        <div class="content header-color">
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
        <div class="content main-color">
            <div class="main margin">
                <div class="find text-align">
                    找回密码
                </div>
                <div class="container margin">
                    <captcha></captcha>
                </div>
            </div>
            <div class="footer">
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
    </div>
</template>
<script>
import captcha from './captcha.vue'
export default {
    data() {
            return {}

        },
        components: {
            "captcha": captcha
        }
}
</script>
<style>
body {
    min-width: 700px;
}

.content {
    width: 100%;
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
    height: 100%;
}

.main {
    font-size: 0;
    width: 985px;
}

.find {
    font-size: 20px;
    color: #435b68;
    margin-bottom: 100px;
    padding: 20px;
}

.container {
    width: 350px;
    height: 200px;
}

.row {
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #e1e3df;
}

.iconbox {
    width: 50px;
    height: 100%;
    vertical-align: middle;
        line-height: 55px;
}

.icon {
    width: 40px;
    height: 35px;
    vertical-align: middle;
}

.btn {
    height: 25px;
    width: 75px;
    background-color: #4ac1c7;
    border-radius: 4px;
    vertical-align: middle;
    /*    float: right;
*/
}
.inputword{
    font-size: 15px;
}
.check{
    line-height: 30px;
    color: #ac372b;
    margin-left: 50px;
    font-size: 15px;
}
.footer {
    width: 100%;
    height: 56px;
    background-color: #afdce1;
    position: fixed;
    bottom: 0;
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
