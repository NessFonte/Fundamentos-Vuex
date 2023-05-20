import state from './state.js'
import * as mutations from './mutations.js'
import * as actions from './actions.js'
import * as getters from './getters.js'

const counterStore = {
    namespaced: true,

    // Variables reactivas de Vuex
    state,

    // Cambio de estado de los states en Vuex
    mutations,

    // Métodos que pueden ser asíncronas
    actions,

    // Son parecidas a las variables computadas
    getters,
}

export default counterStore