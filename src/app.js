
import { itemsContainer } from './items/container.js'

const httpRepository = new HttpRepository()

// TODO: add more service here
const itemService = new ItemService(httpRepository)

// TODO: add more presenter here
const itemPresenter = new ItemPresenter(itemService)

const routes = [
    { path: '/', name: 'auth',  component: itemsContainer },
]

// vue Router
const vueRouter = new VueRouter({ routes, mode: 'history' });

Vue.use({    
    install (Vue) {
        Vue.prototype.$itemPresenter = itemPresenter;
    }
})

new Vue({
    el: '#app'
})