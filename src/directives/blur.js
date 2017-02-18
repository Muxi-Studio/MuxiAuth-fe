export default {
    bind: function(el, binding, vnode) {
    	el.addEventListener("blur",binding.value)
    },
    unbind:function(el, binding){
    	el.removeEventListener("blur",binding.value)
    }
}