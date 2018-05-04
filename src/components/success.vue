<template>
    <div>
        <svg class="finish margin" viewBox="0 0 1024 1024">
            <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#finish"></use>
        </svg>
        <div class="title-find text-align set-top">
            恭喜您，密码设置成功！
        </div>
        <a href="https://user.muxixyz.com" class="toLogin btn next vertical-align orange-color login-top text-align">立即登录</a>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>
<style lang="scss">
@import '../mobile.scss';
.finish {
    height: 100px;
    width: 100px;
    display: block;
}

.set-top {
    margin-top: 30px;
}

.login-top {
    margin-top: 60px;
}

.toLogin {
    display: block;
    line-height: 45px;
}
</style>
