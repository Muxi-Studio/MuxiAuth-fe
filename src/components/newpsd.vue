<template>
    <div>
        <div class="wrap">
            <div class="content header-color">
                <div class="header margin" v-on:click="changeColor">
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
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style>
body {
    min-width: 700px;
}

.highlight {
    color: #0b2029;
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

.btn {
    font-size: 14px;
    border: none;
    color: #878583;
    background-color: transparent;
}

.eye {
    width: 20px;
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
    margin-bottom: -129px;
    min-height: 100%;
    overflow: hidden;
}

.main {
    font-size: 0;
    width: 985px;
}

</style>
