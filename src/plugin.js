import Toast from './toast'

let currentCoast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentCoast) {
                currentCoast.close()
            }
            currentCoast = createCoast({Vue, message, propsData: toastOptions})
        }
    }
}

function createCoast({Vue, message, propsData}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}