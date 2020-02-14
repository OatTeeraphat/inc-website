
import { itemsContainer } from './items/container.js'

const httpRepository = new HttpRepository()


const routes = [
    { path: '/', name: 'item',  component: itemsContainer },
    { path: '/doc', name: 'item',  component: itemsContainer },
]

// vue Router
const vueRouter = new VueRouter({ routes, mode: 'history' });

// TODO: add more service here
const itemService = new ItemService(httpRepository, vueRouter)

// TODO: add more presenter here
const itemPresenter = new ItemPresenter(itemService)

Vue.use({    
    install (Vue) {
        Vue.prototype.$itemPresenter = itemPresenter;
    }
})

new Vue({
    el: '#app',
    router : vueRouter
})