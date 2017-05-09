<template>
    <input type="text" class="transparent inline-block vertical-align" placeholder="邮箱" ref="input" v-model="text" v-bind:value="value" v-on:input="updateValue($event.target.value)">
</template>

<script>
// let id = false

// if (id){
//     clearTimeout(id)
//     id = false
// }else{
//     id = setTimeout(xxx)
// }
export default {
    data() {
            return {
            	former:"",
            	flag:true,
            	text:""
            }
        },
        props: ['value'],
        methods: {
            updateValue: function(value) {
            	var that = this
            	if(this.flag){
	            	setTimeout(that.test,2000)
	            	this.flag = false
            	}
            },
            test(){
            	this.$emit('onemit',this.text)
            	this.flag = true

            }
        }
}
</script>
