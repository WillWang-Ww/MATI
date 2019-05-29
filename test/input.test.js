const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    //it:隔离测试用例 测试驱动开发TDD
    it('存在.', () => {
        expect(Input).to.exist
    })
})
describe('props', () => {
    it('接收 value', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                value: '1234'
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('1234')
        vm.$destroy()
    })
    it('接收 disabled', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)
        vm.$destroy()
    })
    it('接收 readonly', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                readonly: true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.readOnly).to.equal(true)
        vm.$destroy()
    })
    it('接收 error', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                error: 'you are wrong'
            }
        }).$mount()
        const useElements = vm.$el.querySelector('use')
        expect(useElements.getAttribute('xlink:href')).to.equal('#icon-error')
        const errorMessage = vm.$el.querySelector('.errorMessage')
        expect(errorMessage.innerText).to.equal('you are wrong')
        vm.$destroy()
    })
})
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        it('支持change', () => {
            const vm = new Constructor({}).$mount()
            const callback = sinon.fake();
            vm.$on('change', callback)
            let event = new Event('change');
            Object.defineProperty(
                event,'target',{
                    value:{value:'Demo'},enumerable:true
                }
            )
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith('Demo')
            vm.$destroy()
        })
        it('支持focus', () => {
            const vm = new Constructor({}).$mount()
            const callback = sinon.fake();
            vm.$on('focus', callback)
            let event = new Event('focus');
            Object.defineProperty(
                event,'target',{
                    value:{value:'Demo'},enumerable:true
                }
            )
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith('Demo')
            vm.$destroy()
        })
        it('支持blur', () => {
            const vm = new Constructor({}).$mount()
            const callback = sinon.fake();
            vm.$on('blur', callback)
            let event = new Event('blur');
            Object.defineProperty(
                event,'target',{
                    value:{value:'Demo'},enumerable:true
                }
            )
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith('Demo')
            vm.$destroy()
        })
        it('支持input', () => {
            const vm = new Constructor({}).$mount()
            const callback = sinon.fake();
            vm.$on('input', callback)
            let event = new Event('input');
            Object.defineProperty(
                event,'target',{
                    value:{value:'Demo'},enumerable:true
                }
            )
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).to.have.been.calledWith('Demo')
            vm.$destroy()
        })
})