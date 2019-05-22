<template>
    <div>
        <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
            <svg v-if="icon" class="icon">
                <use v-bind:xlink:href="`#icon-${icon}`"></use>
            </svg>
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
        > .icon{order:1;margin-right: 0.3em;margin-left: 0em;}
        &.icon-right{
            > .content{order:1;}
            > .icon{order:2;margin-right: 0em;margin-left: 0.3em;}
        }
    }
</style>