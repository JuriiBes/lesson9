import { createStore } from 'vuex'
import products from '../data/products.json'

export default createStore({
    state: {
        productList: [],
    },
    getters: {
        gProductList: (state) => state.productList,
        gFilteredProductList: (state) => (category) => {
            return state.productList.filter((product) => {
                if (product.category === category) return product
            })
        },
    },
    mutations: {
        aProductList(state, products) {
            state.productList = JSON.parse(JSON.stringify(products))
        },
    },
    actions: {
        aProductList({ commit }) {
            commit('aProductList', products)
        },
    },
    modules: {},
})
