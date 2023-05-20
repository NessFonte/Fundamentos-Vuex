import { createStore } from "vuex"
import counterStore from "./counter/index.js"

export default createStore({
    modules: {
        counter: counterStore
    }
})