<template>
    <div>
        <div>Stado do Vuex: {{ count }}</div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    setup() {
        return {};
    },
    computed: {
        ...mapState(["count"])
    }
};
</script>

<style lang="scss" scoped>
</style>