<template>
    <input type="text" class="transparent inline-block vertical-align" 
    placeholder="邮箱" 
    ref="input" 
    v-bind:value="value" 
    v-on:input="updateValue($event.target.value)">
</template>

<script>
export default {
    data() {
            return {
            	flag:true,
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
            	this.$emit('onemit',this.$refs.input.value)
            	this.flag = true
            }
        }
}
</script>
