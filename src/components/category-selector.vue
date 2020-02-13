<template>
  <div>
    <ul>
      <li v-for="category in categories" v-bind:key="category.code">
        <input type="radio" name="category" :id="category.code" />
        <label :for="category.code" v-on:click="targetCategory"> {{ category.name }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { dummyCategories } from "../dummy/categories";

export default {
  name: "CategorySelector",
  data: function() {
    return { categories: dummyCategories };
  },
  methods: {
    targetCategory: function(e) {
      console.log(e.target.innerHTML);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  width: 50%;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
