<template>
<div class="wrap">
    <div class="header">
  	    <img src="http://p1.bqimg.com/567571/2c7c44100e48ca4e.png" class="logo">
  	</div>
  	<div class="main">
	  	<div class="top">
	    	<img src="http://p1.bqimg.com/567571/8bdd1501da6373b1.png" class="circle">
	    </div>
	    <div class="bottom">
		    <div class="container">
				 <button class="loginButton btn" v-on:click = "onLogin">登录</button>
			     <button class="btn" v-on:click = "onRegister">注册</button>
		    </div>
			<div class="box">
			  <div class="iconbox">
			  <img src="http://p1.bqimg.com/4851/b4cd511b8361c9fc.png" class="icon">
			  </div>
			  <input v-model = "message.emailInput" class="inputbox" id="emailInput" type="text" placeholder="邮箱" v-blur="alertmessage">
			</div>
			  <div class="check" v-show="result">邮箱格式有误
			  </div>
			<div class="box">
			    <div class="iconbox">
			     	<img src="http://p1.bpimg.com/567571/f65b0c8dbf582daa.png" class="icon">
			    </div>
		      	<input v-model = "message.passwordInput" class="inputbox" type="password" placeholder="密码(不少于六位）" v-blur="alertmessage" id="passwordInput" v-show="!showPass">
		      	<input v-model = "message.passwordInput" class="inputbox" type="text" placeholder="密码(不少于六位）" v-blur="alertmessage" id="passwordInput" v-show="showPass">
		      	<div class="iconbox">
		          	<img src="http://p1.bqimg.com/4851/f766b55f214f6b8d.png" class="icon" v-on:click = "showPass = !showPass">
		      	</div>
		    </div>
		        <div class="check" v-show="checklength">密码请勿少于六位
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
		    <div class="check" v-show = "checkmatch">密码输入不一致</div>
			<button v-on:click = "submit" class="change box">{{submitWord}}</button>
		</div>
	</div>
	<div class="footer">
	    <a href="http://xueer.muxixyz.com" class="xueer word">学而</a>
	    <a href="http://muxistudio.com"class="word">木犀团队</a>
	    <a href="http://share.muxixyz.com/" class="word">木犀分享</a>
	</div>
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
			showPass: false,
			result: false,
			checklength: false,
			checkmatch: false
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
				this.message.emailInput = ""
			    this.message.passwordInput = ""
			    this.message.psdsecond = ""
			    this.checkmatch= false
			    this.result = false
			    this.checklength = false
			}
		},
		onRegister(){
			if (!this.login) {
				this.login = true
				this.submitWord = "注册"
				this.message.emailInput = ""
			    this.message.passwordInput = ""
			    this.message.psdsecond = ""
			    this.checkmatch = false
			    this.result = false
			    this.checklength = false
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


			var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			//console.log("email.test(this.emailInput)",email.test(this.emailInput),!this.message.emailInput)
            this.result = (!email.test(this.message.emailInput)&& this.message.emailInput)
            //console.log(this.emailInput)
            var psdlength = /.{6,}/;
            this.checklength = (!psdlength.test(this.message.passwordInput)&& this.message.passwordInput)
		},
		submit(){
			if(this.message.psdsecond != this.message.passwordInput && this.login){
				this.checkmatch  = true
			}
			if(this.message.psdsecond == this.message.passwordInput && this.login){
				this.checkmatch  = false
			}
			if(this.checkmatch || this.result || this.checklength || !this.message.passwordInput || !this.message.emailInput) return
			if(this.login){
				fetch("/api/v1.0/register/",{
					method: 'POST',
                    headers: {
                             'Accept': 'application/json',
                             'Content-Type': 'application/json'
                             },
                    body: JSON.stringify({
                    username:this.message.emailInput,
                    password:this.message.passwordInput
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
                    username:this.message.emailInput,
                    password:this.message.passwordInput
                        })
                    }).then(res => {
                    	return res.json()
                    }).then(res => {
                    	console.log(res)
                    	//this.token = res.token

                    })
				}
	   }
   }
}
</script>


<style>
body{
	min-width: 300px;
}
.header{
	background-color: rgba(251, 247, 213, 0.99);
	height: 37px;
	text-align: center;
}
.logo{
	width: 108px;
    margin-top: 7px;
}
.main{
	width: 100%;
	background-color: #ffffff;
	min-height: 100%;
    margin-bottom: -80px;
}
.top{
	height: 40%;
	padding: 20px;
}
.circle{
	display: block;
    margin: 0 auto;
    height: 75%;
    width: 47%;
}
.bottom{
	width: 100%;
	height: 60%;
}
.container{
	font-size: 18px;
    color: rgba(71, 70, 68, 0.99);
    display: flex;
    justify-content: center;
    margin: 0 auto;
}
.loginButton{
    display: inline-block;
    margin-right: 10px;
}

.btn{
    font-size: 14px;
    border: none;
    color: #0b2029;
    background-color: transparent;
}
.box{
    color: #0b2029;
    background-color: transparent;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #737373;
    width: 72%;
    margin: 14px auto;
    display: block;
    font-size: 0;
}

.inputbox{
	display: inline-block;
	vertical-align: middle;
	width: 66%;
}
.iconbox{
	width: 16%;
	height: 100%;
	display: inline-block;
    vertical-align: middle;
    position: relative;
}
.icon{
	width: 14px;
	height: 12px;
	/*margin-top: calc(50% - 10px);*/
	/*margin-left: calc(50% - 7px);*/
	transform: translate(-50%,-50%);
    top:50%;
    left: 50%;
    position: absolute;
}
.change{
	background-color: rgba(255, 133, 12, 0.99);
	color: #ffffff;
	font-size: 18px;
	border: none;
}
.change:hover {
	background-color: #df6b0f;

}
.footer{
	width: 100%;
	height: 43px;
    background-color: #2b2b29;
	margin-bottom: 0;
	display: flex;
}
.word{
	flex: 1;
	line-height: 43px;
	color: #9ac2c6;
}
.xueer{
	margin-left: 10%;
}
.check{
	font-size: 11px;
	color: #aa3e21;
	margin-left: 14%;
}
</style>
