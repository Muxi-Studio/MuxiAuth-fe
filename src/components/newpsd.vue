<template>
    <div class="wrap">
        <div class="full-width main-color full-height">
            <div class="main margin full-height">
                <div class="find text-align">
                    找回密码
                </div>
                <div class="container margin">
                    <captcha></captcha>
                </div>
            </div>
        </div>
        <div class="full-width header-color">
            <div class="header margin">
                <svg class="logo">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo">
                    </use>
                </svg>
                <a href="http://share.muxixyz.com/" class="share word word-change">木犀分享</a>
                <a href="http://muxistudio.com" class="studio word word-change">木犀团队</a>
                <a href="http://xueer.muxixyz.com" class="word word-change">学而</a>
            </div>
        </div>
        <div class="footer full-width">
            <div class="center margin">
                <a href="http://muxistudio.com" class="copyright text-align">
                    华中师范大学木犀团队
                </a>
                <div class="copyright text-align">
                    Hello from Wuhan，2014-2017 MuxiStudio
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
<style lang="sass">
@import '../pc.scss';
.find {
    font-size: 20px;
    color: #435b68;
    margin-bottom: 100px;
    padding-top: 83px;
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

.new-icon {
    width: 40px;
    height: 35px;
    vertical-align: middle;
}

.btn {
    height: 25px;
    width: 80px;
    background-color: #4ac1c7;
    border-radius: 4px;
    vertical-align: middle;
    margin-left: 50px;
    color: #ffffff;
}

.inputword {
    font-size: 15px;
}

.check {
    line-height: 30px;
    color: #ac372b;
    margin-left: 50px;
    font-size: 15px;
}
</style>
