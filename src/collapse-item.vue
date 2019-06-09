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
            },
            name:{
                type:String,
                required: true
            }
        },
        data(){
            return{
                open:false
            }
        },
        inject:['eventBus'],
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected',(name)=>{
                if(name !== this.name){
                    this.close()
                }else{
                    this.show()
                }
            })
        },
        methods:{
            toggle(){
                if (this.open){
                    this.open = false
                } else {
                    this.eventBus && this.eventBus.$emit('update:selected',this.name)
                }
            },
            close(){
                this.open = false
            },
            show(){
                this.open = true
            }
        }
    }
</script>
<style scoped lang="scss">


</style>
