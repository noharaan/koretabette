<template>
  <div></div>
</template>

<script>
import { dummyCategories } from "../dummy/categories";

export default {
  name: "CategorySelector",
  data: function() {
    return { categories: dummyCategories };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
</style>
