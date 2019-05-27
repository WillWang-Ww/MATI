const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    //it:隔离测试用例
    it('存在.', () => {
        expect(Input).to.exist
    })
    it('接收 value', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
               value:'1234'
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('1234')
        vm.$destroy()
    })
})