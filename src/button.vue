<template>
    <div>
        <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
            <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
            <g-icon class="loading icon" name="loading" v-if="loading"></g-icon>
            <div class="content">
                <slot></slot>
            </div>
        </button>
    </div>
</template>
<script>
    export default {
        props: {
            icon:{},
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return value === 'left' || value === 'right';
                }
            }
        }
    }
</script>
<style lang="scss">
    @keyframes loading {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
    }
    .g-button {
        font-style: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
        > .content{order:2;}
        > .g-icon{order:1;margin-right: 0.3em;margin-left: 0em;}
        &.icon-right{
            > .content{order:1;}
            > .g-icon{order:2;margin-right: 0em;margin-left: 0.3em;}
        }
        .loading{
            animation: loading 1s infinite linear;
        }
    }
</style>