<template>
<div class="wrap">
<div class="header">
<img src="http://p1.bpimg.com/4851/0cbf553a4e98a401.png" class="logo">
  <a href="http://share.muxixyz.com/" class="share word">木犀分享</a>
  <a href="http://muxistudio.com" class="studio word">木犀团队</a>
  <a href="http://xueer.muxixyz.com" class="xueer word">学而</a>
</div>
<div class="main">
  <div class="left">
    <img src="http://p1.bpimg.com/4851/1b5d2b9c20befb88.png" class="circle">
  </div>
  <div class="right">
    <div class="container">
		<button class="loginButton btn" v-on:click = "onLogin">登录</button>
	    <button class="registerButton btn" v-on:click = "onRegister">注册</button>
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
        <input v-model = "message.psdsecond" class="inputbox" type="text" placeholder="再次输入密码" v-blur="alertmessage" id="psdsecond" v-show="showPass">
		<div class="iconbox">
		<img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon" v-on:click = "showPass = !showPass">
		</div>
	</div>
	<button v-on:click = "submit" class="change box">{{submitWord}}</button>
	</div>
    </div>
	</div>
<div class="footer"></div>
	</div>
</template>

<script>
import blur from '../directives/blur.js'
export default{
	data(){
		return{
			message:{
				emailInput:"",
			    passwordInput:"",
			    psdsecond:"",
			},
			emailInput:['lengthCheck', 'emailCheck'],
			passwordInput:['lengthCheck'],
			psdsecond:['lengthCheck'],
			login:false,
			submitWord:"登录",
			showPass: false
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
		lengthCheck(key,word){
			console.log('lengthCheck!!' + key + word)
		},
		emailCheck(key,word){
			console.log('emailCheck!!' + key + word)
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
			//var api = this.login ? "/api/v1.0/register/":"/api/v1.0/login/"
			//console.log("this.psdsecond",this.psdsecond,"this.passwordInput",this.passwordInput)
			//console.log("api",api)
			//fetch(api,{
                        //method: 'POST',
                        //headers: {
                           // 'Accept': 'application/json',
                           // 'Content-Type': 'application/json'
                        //},
                        //body: JSON.stringify({
                            //content: this.psdsecond
                        //})
                    //}).then(res => {
                    //	return res.json()
                   // }).then(res => {
                   // 	console.log(res)
                    	//this.token = res.token
                   // })
			//console.log(this.message)
			//this.isture = true
			if(this.psdsecond != this.passwordInput && this.login){
				alert("两次密码输入不一致")
			 }
	   }
   }
}
</script>

<style>
.header{
	width: 100%;
	height: 73px;
	background-color: #ffffff;
	overflow: hidden;
}
.logo{
	width: 101px;
	height: 24px;
	margin-top: 23px;
	margin-left: 92px;
	float: left;
}
.word{
	line-height: 73px;
	font-size: 15px;
	font-family: "Adobe Heiti Std";
    float: right;
}
.xueer{
	margin-left: 400px;
}
.studio{
	margin-left: 40px;
}
.share{
	margin-left: 40px;
	margin-right: 184px;
}
.main{
	width: 100%;
	height: calc(100% - 114px);
	background-color: #f4f7ed;
	font-family: "FZLTZHK";
	position: relative;
	font-size: 0;
}

.circle{
	width: 380px;
	height: 380px;
    transform: translate(-50%,-50%);
    top:50%;
    left: 50%;
	position:absolute;
}
.container{
	width: 202px;
	display: inline-block;
	margin-left: calc(50% - 100px);
}
.btn{
    margin-top: 137px;
    font-size: 14px;
    border: none;
    color: #0b2029;
    background-color: transparent;
}
.box{
	width: 202px;
	height: 30px;
	border-radius: 4px;
	margin-top: 22px;
	font-size: 0;
	border: 1px solid #737373;
}
.loginButton{
	margin-left: 50px;
}
.registerButton{
	margin-left: 14px;
}
.change{
	background-color: #fd860e;
	border: none;
	color: #ffffff;
	font-size: 14px;
}
.change:hover {
	background-color: #df6b0f;

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
.left{
	width: 50%;
	height: 100%;
	display: inline-block;
	position: relative;
}
.right{
	width: 50%;
	height: 100%;
	float: right;
	margin-left: 0;
	display: inline-block;
}
.footer{
	width: 100%;
	height: 41px;
	background-color: #afdce1;
	margin-bottom: 0;
}
</style>
