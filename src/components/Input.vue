<template>
    <input type="text" class="transparent inline-block vertical-align" 
    placeholder="邮箱" 
    ref="input" 
    v-model="text" 
    v-bind:value="value" 
    v-on:input="updateValue($event.target.value)">
</template>

<script>
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
            	if(this.flag){
	            	setTimeout(this.test,2000)
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
