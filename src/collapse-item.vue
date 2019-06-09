<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
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
        },
        inject:['eventBus'],
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected',(vm)=>{
                if(vm !== this){
                    this.close()
                }
            })
        },
        methods:{
            toggle(){
                if (this.open){
                    this.open = false
                } else {
                    this.open = true
                    this.eventBus && this.eventBus.$emit('update:selected',this)
                }
            },
            close(){
                this.open = false
            }
        }
    }
</script>
<style scoped lang="scss">
    $grey:#ddd;

</style>
