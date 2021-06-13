<template>
    <div>
        <h2>Exemplo de contador com Composition API {{ state.count }}</h2>
        <button @click="increment">incrementar 1</button>
    </div>
</template>

<script>
import global from "@/store/global";

export default {
    setup() {
        const { state } = global;
        const increment = () => {
            state.count++;
        };
        return { state, increment };
    }
};
</script>

<style lang="scss" scoped>
</style>