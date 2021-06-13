<template>
    <div>
        <input type="text" v-model="model" />
        {{ model }}
    </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
    setup() {
        const data = reactive({
            model: "Ola mundo"
        });

        return { ...toRefs(data) };
    }
};
</script>

<style lang="scss" scoped>
</style>