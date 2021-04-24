<template>
    <div>
        <span>{{money}}</span>
        <span>{{visible}}</span>
        <button @click="fn">更新</button>
    </div>
</template>

<script>
export default {
    props:{
        money:{
            type:Number,
            default:100
        },
        visible:{
            type:Boolean,
            default:false
        }
    },
    
    methods:{
        fn(){
            this.$emit('update:money',200),
            this.$emit('update:visible',true)
        }
    }
}
</script>