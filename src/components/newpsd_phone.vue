<template>
    <div class="wrap">
        <div class="no-footer">
            <a href="/phone" class="back inline-block">
                < 返回</a>
                    <div class="header  full-width inline-block">
                        <!-- <a href="/" class="back inline-block"> -->
                        <div class="title-find text-align">
                            找回密码
                        </div>
                    </div>
                    <div class="container margin">
                        <router-link to="/newpsd">
                        </router-link>
                        <router-view></router-view>
                    </div>
        </div>
        <div class="footer-copy full-width">
            <div class="footer full-width">
                <a href="http://xueer.muxixyz.com" class="word word-change text-align">学而</a>
                <a href="http://muxistudio.com" class="word word-change text-align">木犀团队</a>
                <a href="http://share.muxixyz.com/" class="word word-change text-align">木犀分享</a>
            </div>
            <div class="full-width">
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
import captcha from './captcha.vue'
import reset from './reset.vue'

export default {
    data() {
            return {
                message: []
            }
        },
        components: {
            "captcha": captcha,
            "reset": reset
        }
}
</script>
<style lang="sass">
@import '../mobile.scss';
.back {
    margin-left: 5px;
    font-size: 12px;
    line-height: 37px;
    position: absolute;
}

.title-find {
    font-size: 18px;
    line-height: 37px;
}

.container {
    width: 85%;
    height: 200px;
    padding-top: 30px;
}

.input-tip {
    height: 82px;
}

.row-line {
    height: 50px;
    border-bottom: 2px solid #e1e3df;
}

.iconbox {
    width: 16%;
    line-height: 50px;
}

.icon-size {
    width: 60%;
    height: 25px;
    transform: translateX(30%);
    margin: 0 auto;
}

.inputword {
    font-size: 15px;
    width: 48%;
}

.find-check {
    line-height: 30px;
    color: #ac372b;
    font-size: 15px;
    margin-left: 16%;
}

.btn {
    // background-color: #4ac1c7;
    border-radius: 2px;
    width: 100%;
    height: 100%;
    color: #ffffff;
}

.code-box {
    width: 31%;
    margin-right: 0;
    height: 28px;
}

.next {
    height: 45px;
    font-size: 16px;
}

</style>
