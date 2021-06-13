<template>
    <nav class="navigation">
        <router-link :to="{ name: 'vuex' }">Vuex</router-link> |
        <router-link :to="{ name: 'composition' }">Composition</router-link> |
        <router-link :to="{ name: 'states' }">Estados</router-link>
    </nav>
</template>

<script>
export default {
    name: "Navigation"
};
</script>
<style lang="scss" scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

.navigation {
    margin-bottom: 30px;
}
</style>
