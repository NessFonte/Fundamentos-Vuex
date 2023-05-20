<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.count }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt">Random</button>

    <h1>mapState</h1>
    <h2>mapState: {{ count }}</h2>
    <h2>mapState: {{ lastMutation }}</h2>
</template>

<script>
import { mapState } from "vuex"

export default {
    computed: {
        ...mapState(['count', 'lastMutation'])
    },
    
    methods: {
        increment() {
            this.$store.commit('increment')
        },

        incrementBy() {
            this.$store.commit('incrementBy', 5)
        },

        incrementRandomInt() {
            this.$store.dispatch('incrementRandomInt')
        }
    }

}
</script>
