<template>
<div class="wrap">
  <img src="http://p1.bpimg.com/567571/bc7712cfadc0be46.png" class="header">
  <div class="main">
  <div class="top">
    <img src="http://p1.bpimg.com/4851/1b5d2b9c20befb88.png" class="circle">
    </div>
    <div class="bottom">
    <div class="container">
		<button class="loginButton btn" v-on:click = "onLogin">登录</button>
	    <button class="registerButton btn" v-on:click = "onRegister">注册</button>
	    </div>
	<div class="box">
	  <div class="iconbox">
	  <img src="http://p1.bqimg.com/4851/b4cd511b8361c9fc.png" class="icon">
	  </div>
	  <input v-model = "message.emailInput" class="inputbox" id="emailInput" type="text" placeholder="邮箱" v-blur="alertmessage">
	</div>
	<div class="box">
	<div class="iconbox">
	  <img src="http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
	  </div>
      <input v-model = "message.passwordInput" class="inputbox" type="password" placeholder="请输入密码" v-blur="alertmessage" id="passwordInput" v-show="!showPass">
      <input v-model = "message.passwordInput" class="inputbox" type="text" placeholder="请输入密码" v-blur="alertmessage" id="passwordInput" v-show="showPass">
      <div class="iconbox"><img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon" v-on:click = "showPass = !showPass">
      </div>
    </div>
	<div v-show = "login" class="box">
	<div class="iconbox">
       <img src= "http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
       </div>
		<input v-model = "message.psdsecond" class="inputbox" type="password" placeholder="再次输入密码" v-blur="alertmessage" id="psdsecond" v-show="!showPass">
        <input v-model = "psdsecond" class="inputbox" type="text" placeholder="再次输入密码" v-blur="alertmessage" id="psdsecond" v-show="showPass">
		<div class="iconbox">
		<img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon" v-on:click = "showPass = !showPass">
		</div>
	</div>
	<button v-on:click = "submit" class="change box">{{submitWord}}</button>
	</div>
	</div>
  <div class="footer">
    <div class="xueer word"></div>
    <div class="studio word"></div>
    <div class="share word"></div>
  </div>
  </div>
</template>

<style>
.header{
	width: 100%;
	height: 37px;
}
.main{
	width: 100%;
	height: calc(100% - 80px);
	background-color: #ffffff;
}
.top{
	width: 100%;
	height: 40%;
	position: relative;
}
.circle{
	position: absolute;
	transform: translate(-50%,-50%);
    top:50%;
    left: 50%;
    width: 47%;
}
.bottom{
	width: 100%;
	height: 60%;
}
.container{
	width: 72%;
	height: 17px;
	font-size: 18px;
    border: none;
    background-color: transparent;
}
.loginButton{
    margin-left: calc(100% / 3);
    display: inline-block;
}
.registerButton{
	margin-right: calc(100% / 3);
	display: inline-block;
}
.btn{
    border: none;
    color: #0b2029;
}
.box{
    margin-top: 30px;
    font-size: 14px;
    color: #0b2029;
    background-color: transparent;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #737373;
}

.inputbox{
	display: inline-block;
	height: 100%;
	background-color: transparent;
	border: none;
	vertical-align: middle;
}
.iconbox{
	width: 34px;
	height: 100%;
	display: inline-block;
    vertical-align: middle;
}
.icon{
	width: 14px;
	height: 12px;
	margin-top: calc(50% - 10px);
	margin-left: calc(50% - 7px);
}
.footer{
	width: 100%;
	height: 43px;
    background-color: #2b2b29;
	margin-bottom: 0;
}
</style>
<script>
import blur from '../directives/blur.js'
export default{
	data(){
		return{
			emailInput:"",
			passwordInput:"",
			psdsecond:"",
			login:false,
			showPass: false,
			submitWord:"登录"
		}
	},
	directives: {
		blur:blur
	},
	methods:{
		onLogin(){
			if(this.login){
				this.login = false
				this.submitWord = "登录"
			}
		},
		onRegister(){
			if (!this.login) {
				this.login = true
				this.submitWord = "注册"
			}
            
		},
		alertmessage(e){
			var key = e.target.id
			console.log(this.message[key])
			this[key].forEach(e => this[e](key,this.message[key]))
		},
		submit(){
			if(this.login){
				fetch("/api/v1.0/register/",{
					method: 'POST',
                    headers: {
                             'Accept': 'application/json',
                             'Content-Type': 'application/json'
                             },
                    body: JSON.stringify({
                    //content: this.psdsecond
                        })
                    
                    })
				}
			if(!this.login){
				fetch("/api/v1.0/login/",{
				method: 'POST',
                headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
                         },
                body: JSON.stringify({
                    //content: this.psdsecond
                        })
                    }).then(res => {
                    	return res.json()
                    }).then(res => {
                    	console.log(res)
                    	//this.token = res.token

                    })
				}
			if(this.psdsecond != this.passwordInput){
				alert("两次密码输入不一致")
			 }
	   }
   }
}
</script>
