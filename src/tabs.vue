<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        name:'MatiTabs',
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type:String,
                default: 'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value) >= 0
                }
            }
        },
        data (){
            return{
                eventBus:new Vue()
            }
        },
        provide (){
            return{
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                if(vm.$options.name === 'MatiTabsHead') {
                    vm.$children.forEach((childvm) => {
                        if (childvm.name === this.selected){
                            this.eventBus.$emit('update:selected',this.selected,childvm)
                        }
                    })
                }
            })
            this.eventBus.$emit('update:selected',this.selected)
        }
    }
</script>
<style></style>