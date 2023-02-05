<template>
  <div >
    <Nuxt />  
    <app-moviegenre></app-moviegenre>
    <app-movielist></app-movielist>
  </div>
</template>
<script>
import MovieGenre from "../components/movies/MovieGenre.vue";
import MovieList from "../components/movies/MovieList.vue";
export default {
  components: {
    'app-movielist': MovieList,
    'app-moviegenre': MovieGenre,
  },
};
</script>
<style>
</style>
