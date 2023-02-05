<template>
  <div>
    <div class="featured__controls">
      <ul v-for="(genre, index) in genres" :key="index">
        <li @click="filterCategoryMovie(`${genre}`)">{{ genre }}</li>
      </ul>
    </div>
    {{ filterCategory }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterCategory: "",
    };
  },
  methods: {
    filterCategoryMovie(category) {
      this.filterCategory = category;
    },
  },
  computed: {
    genres() {
      return this.$store.getters.genreData;
    },
  },
};
</script>

<style scoped>
.featured__controls {
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}

.featured__controls ul li {
  list-style: none;
  font-size: 18px;
  color: #1c1c1c;
  margin-right: 25px;
  position: relative;
  cursor: pointer;
}

.featured__controls ul li.active:after {
  opacity: 1;
}

.featured__controls ul li:hover{
  background-color: #7fad39;
  position: relative;
  border-radius: 10px;
}
.featured__controls ul li:after {
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: #7fad39;
  content: "";
  opacity: 0;
}

.featured__controls ul li:last-child {
  margin-right: 0;
}
</style>
