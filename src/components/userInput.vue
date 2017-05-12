<template>
    <input type="text" 
    placeholder="用户名(不超过八个字符)" 
    ref="input" 
    v-bind:value="value" 
    v-on:input="updateValue($event.target.value)">
</template>

<script>
let timeoutId= 1;

export default {
    data() {
            return {}
        },
        props: ['value'],
        methods: {
            updateValue: function(value) {
            	if(timeoutId){
            		clearTimeout(timeoutId)
            		timeoutId = setTimeout(() => {
            			this.$emit('input',value)
            		},2000)
            	}
            }
        }
}
</script>
