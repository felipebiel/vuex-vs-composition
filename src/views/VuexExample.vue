<template>
    <div>
        <h2>Exemplo de contador com Vuex {{ count }} {{ count1 }}</h2>
        <button @click="increment1">incrementar 1</button>
        <button @click="increment1">incrementar 2</button>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    methods: {
        ...mapActions(["increment"]),
        increment1() {
            this.$store.dispatch("increment");
        }
    },
    computed: {
        ...mapState(["count"]),
        count1() {
            return this.$store.state.count;
        }
    }
};
</script>

<style lang="scss" scoped>
</style>