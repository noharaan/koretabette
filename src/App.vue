<template>
  <div id="app">
    <Dummy />
    <CategorySelector />
  </div>
</template>

<script>
import CategorySelector from "./components/category-selector.vue";
import Dummy from "./components/dummy.vue";

export default {
  name: "app",
  components: {
    CategorySelector,
    Dummy
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
