<template>
<div>
    <button type="submit" class="btn">{{time | change}}</button>
    </div>
</template>
<script>
	let flag = false
    export default {
        data () {
            return {
                time : '获取验证码',
            }
        },
        props : {
            start : {
                type : Boolean
            }
        },
        watch : {
            start (value,oldvalue) {
                if(value == true){
                    this.countDown()
                }
            }
        },
        methods: {
            countDown () {
            	var tip = 3;
                this.time = tip + 's之后重新发送';
                let time = setInterval(()=>{
                    tip --
                    this.time = tip + 's之后重新发送'
                    if(tip == 0){
                        this.$emit('countDown')
                        this.time = '重新发送'
                        flag = true
                        clearInterval(time)
                    }
                },1000)
            }
        },
        filters : {
            change (value) {
               if(!value) return ""
               if(!isNaN(value)){
                   if(flag == true){
                       return `重新发送${value}S`
                   }
                   return value+'S'
               }else{
                   return value
               }
            }
        }

    }
</script>
    <style>
    </style>
