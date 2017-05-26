<template>
    <div class="wrap">
        <div class="full-width main-color full-height">
            <div class="main margin full-height">
                <div class="find text-align">
                    找回密码
                </div>
                <div class="container margin">
                    <router-link to="/newpsd">
                    </router-link>
                    <router-view></router-view>
                </div>
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

.input-tip {
    height: 87px;
}

.row-line {
    height: 55px;
    border-bottom: 2px solid #e1e3df;
}

.iconbox {
    width: 50px;
    line-height: 50px;
}

.icon-size {
    width: 25px;
    height: 25px;
    transform: translateX(50%);
}

.btn {
    height: 30px;
    width: 80px;
    background-color: #4ac1c7;
    border-radius: 4px;
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
