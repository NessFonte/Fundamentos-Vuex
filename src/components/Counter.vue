<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter.count }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomInt" :disabled="isLoading">Random</button>

    <h1>mapState</h1>
    <h2>Last increment: {{ lastRandomInt }}</h2>
    <h2>mapState: {{ lastMutation }}</h2>

    <h2>Direct getter: {{ squareCount }}</h2>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex"

export default {
    computed: {
        ...mapState('counter', ['count', 'lastMutation', 'isLoading', 'lastRandomInt']),
        ...mapGetters('counter', ['squareCount']),
    },
    
    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },

        incrementBy() {
            this.$store.commit('counter/incrementBy', 5)
        },

        ...mapActions('counter', {
            randomInt: 'incrementRandomInt',
        })
    }

}
</script>
