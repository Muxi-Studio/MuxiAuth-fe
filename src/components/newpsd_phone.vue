<template>
    <div class="wrap">
        <div class="no-footer">
            <div class="header text-align full-width title-find">
                找回密码
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
            return {}
        },
        components: {
            "captcha": captcha,
            "reset": reset
        }
}
</script>
<style lang="sass">
@import '../mobile.scss';
.title-find {
    font-size: 18px;
    line-height: 37px;
}

.container {
    width: 320px;
}

.row-line {
    height: 70px;
    border-bottom: 2px solid #e1e3df;
}

.iconbox {
    width: 50px;
    vertical-align: middle;
    line-height: 55px;
}

.new-icon {
    width: 40px;
    height: 35px;
    vertical-align: middle;
}

.icon-size {
    width: 25px;
    height: 25px;
    transform: translateX(50%);
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

.btn {
    height: 25px;
    width: 75px;
    background-color: #4ac1c7;
    border-radius: 4px;
    vertical-align: middle;
    margin-left: 55px;
}
</style>
