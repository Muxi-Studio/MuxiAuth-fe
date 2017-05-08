<template>
    <div class="wrap">
        <div class="no-footer">
            <div class="header text-align full-width">
                <svg class="logo" viewBox="0 0 200 200">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
                </svg>
            </div>
            <div class="main">
                <div class="top">
                    <div class="circle margin"></div>
                </div>
                <div class="bottom full-width">
                    <div class="container margin">
                        <div class="text-align router-margin">
                           <captcha></captcha>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="footer-copy full-width">
            <div class="footer full-width">
                <a href="http://xueer.muxixyz.com" class="word word_change text-align">学而</a>
                <a href="http://muxistudio.com" class="word word_change text-align">木犀团队</a>
                <a href="http://share.muxixyz.com/" class="word word_change text-align">木犀分享</a>
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
@import '../mobile.scss'

</style>
