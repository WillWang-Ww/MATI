import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

Vue.component('g-button', Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-toast',Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        selectedTab:'sports'
    },
    created () {

    },
    methods:{
        showToast(position){
            this.$toast('一条长长长长长长的信息来啦',{
                enableHtml: false,
                position,
                closeButton: {
                    text:'关闭',
                    callback(){
                        console.log('OK')
                    }
                },
                autoClose: true,
                autoCloseDelay: 100
            })
        }
    }
})
