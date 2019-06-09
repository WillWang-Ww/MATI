<template>
    <div class="collapseItem">
        <div class="title" @click="open = !open">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "collapse-item",
        props:{
            title:{
                type:String,
                required:true
            }
        },
        data(){
            return{
                open:false
            }
        }
    }
</script>
<style scoped lang="scss">
    $grey:#ddd;

</style>
