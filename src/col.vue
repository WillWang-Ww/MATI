<template>
    <div class="col" :class="colClass"
         :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    let validator = (value)=>{
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key=>{
            if(!['span','offset'].includes(key)){
                valid = false
            }
        })
        return valid
    }
    export default {
        name: 'MatiCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            ipad:{type:Object, validator},
            narrowPc:{type:Object, validator},
            pc:{type:Object, validator},
            widePc:{type:Object, validator},
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            },
            colClass() {
                let {span, offset, phone,ipad,narrowPc,pc,widePc} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    ...(phone ? [`col-phone-${phone.span}`]:[]),
                    ...(ipad ? [`col-ipad-${ipad.span}`]:[]),
                    ...(narrowPc ? [`col-narrowPc-${narrowPc.span}`]:[]),
                    ...(pc ? [`col-pc-${pc.span}`]:[]),
                    ...(widePc ? [`col-widePc-${widePc.span}`]:[]),
                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24)*100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24)*100%;
            }
        }
        @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
        @media (min-width: 768px){
            $class-prefix: col-narrowPc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            $class-prefix: offset-narrowPc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
        @media (min-width: 992px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
        @media (min-width: 1200px) {
            $class-prefix: col-widePc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24)*100%;
                }
            }
            $class-prefix: offset-widePc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24)*100%;
                }
            }
        }
    }
</style>