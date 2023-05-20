import { createStore } from "vuex"
import getRandomInt from "@/helpers/getRandomInt.js";

export default createStore({
    // Variables reactivas de Vuex
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0,
    },

    // Cambio de estado de los states en Vuex
    mutations: {
        increment(state) {
            state.count++
            state.lastMutation = 'increment'
        },

        incrementBy(state, value) {
            state.count += value
            state.lastMutation = 'incrementBy ' + value
            state.lastRandomInt = value
        },

        setLoading(state, value){
            state.isLoading = value
            state.lastMutation = 'setLoading ' + value
        }
    },

    // Métodos que pueden ser asíncronas
    actions: {
        async incrementRandomInt({commit}) {
            commit('setLoading', true)
            const randomInt = await getRandomInt()
            commit('incrementBy', randomInt)
            commit('setLoading', false)
        }
    },

    // Son parecidas a las variables computadas
    getters: {
        squareCount(state) {
            return state.count * state.count
        }
    }
})