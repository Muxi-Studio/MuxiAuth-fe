<template>
    <input type="text" class="transparent inline-block vertical-align" placeholder="邮箱" ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)">
</template>

<script>
let id = false

if (id){
    clearTimeout(id)
    id = false
}else{
    id = setTimeout(xxx)
}
export default {
    data() {
            return {}
        },
        props: ['value'],
        methods: {
            updateValue: function(value) {
                var that = this
              	setTimeout(function() {
                    that.$emit('input', value)
                }, 2000)

            }
        }
}
</script>
