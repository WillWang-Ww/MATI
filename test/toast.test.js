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
