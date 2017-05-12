<template>
    <div class="wrap">
            <div class="header text-align full-width">
                <svg class="logo" viewBox="0 0 200 200">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
                </svg>
            </div>
            <div class="main">
                <captcha></captcha>
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
@import '../mobile.scss';
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
    width: 75px;
    background-color: #4ac1c7;
    border-radius: 4px;
    vertical-align: middle;
    margin-left: 55px;
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
