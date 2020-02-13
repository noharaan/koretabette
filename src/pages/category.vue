<template>
  <div>
    <CategorySelector />
  </div>
</template>
<script>
  import CategorySelector from "../components/category-selector.vue";
  export default {
    name: 'Category',
    components: {
      CategorySelector
    }
  }
</script>