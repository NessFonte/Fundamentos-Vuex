<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.count }}</h2>

    <h1>mapState</h1>
    <h2>mapState: {{ count }}</h2>
</template>

<script>
import { mapState } from "vuex"

export default {
    computed: mapState(['count'])
    

}
</script>
