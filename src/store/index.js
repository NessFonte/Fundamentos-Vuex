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
            state.lastMutation = 'incrementBy'
            state.lastRandomInt = value
        }
    },

    // Métodos que pueden ser asíncronas
    actions: {
        async incrementRandomInt(context) {
            const randomInt = await getRandomInt()
            context.commit('incrementBy', randomInt)
        }
    }
})