import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-toast',Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message:'Demo'
    },
    created () {

    },
    methods:{
        showToast(){
            this.$toast('一条长长长长长长的信息来啦',{
                enableHtml: false,
                position:'bottom',
                closeButton: {
                    text:'关闭',
                    callback(){
                        console.log('OK')
                    }
                },
                autoClose: true,
                autoCloseDelay: 10
            })
        }
    }
})
