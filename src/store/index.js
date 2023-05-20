import { createStore } from "vuex"

export default createStore({
    // Variables reactivas de Vuex
    state: {
        count: 1,
        lastMutation: 'none',
    },

    // Cambio de estado de los states en Vuex
    mutations: {
        increment(state) {
            state.count++
            state.lastMutation = 'increment'
        },

        incrementBy(state, value) {
            state.count += value
            state.lastMutation = 'incrementBy'
        }
    }
})