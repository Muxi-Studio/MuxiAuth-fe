<template>
    <div>
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
                    <div class="margin container">
                        <div class="row">
                            <div class="row-box">
                                <div class="iconbox inline-block">
                                    <svg viewBox="0 0 200 200" class="icon">
                                        <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#email"></use>
                                    </svg>
                                </div>
                                <input type="text" v-model.trim="emailInput" @focus="isFocus" @blur="isBlur" class="transparent inline-block vertical-align" placeholder="请填写邮箱地址">
                                <button type="submit" class="btn">{{}}</button>
                            </div>
                        </div>
                        <div class="height">
                            <div v-if="!this.email_exit && !this.blur">邮箱不存在
                            </div>
                        </div>
                        <div class="row">
                            <div class="row-box">
                                <div class="iconbox inline-block">
                                    <svg viewBox="0 0 200 200" class="icon">
                                        <use xmlns:xlink="http://www.w3.org/2000/svg" xlink:href="#captcha"></use>
                                    </svg>
                                </div>
                                <input type="text" v-model.trim="captchaInput" class="transparent inline-block vertical-align" placeholder="输入验证码">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

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
}

.main {
    font-size: 0;
    width: 985px;
}

.find {
    font-size: 18px;
    color: #435b68;
    margin-bottom: 100px;
    margin-top: 20px;
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

.row-box {
    line-height: 55px;
}

.icon-box {
    width: 50px;
    height: 100%;
    vertical-align: middle;
}

.icon {
    width: 30px;
    height: 25px;
    vertical-align: middle;
}

.btn {
    height: 25px;
    width: 75px;
    background-color: #4ac1c7;
    border-radius: 4px;
    /*    float: right;
*/
}
</style>
