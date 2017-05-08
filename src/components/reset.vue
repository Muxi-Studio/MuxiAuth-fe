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
                <div class="find text-align">
                    找回密码
                </div>
                <div class="container margin">
                   <reset_psd></reset_psd>
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
import reset_psd from './reset_psd.vue'
export default {
    data() {
            return {}

        },
        components: {
            "reset_psd": reset_psd
        }
}
</script>
<style lang="sass">
@import '../pc.scss';
</style>