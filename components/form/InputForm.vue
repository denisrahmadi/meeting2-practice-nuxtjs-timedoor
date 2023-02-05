<template>
  <form>
    <div class="row">
      <div class="col-lg-4 col-md-4">
        <input type="text" placeholder="Movie Name" v-model="movieData.name">
      </div>
      <div class="col-lg-4 col-md-4">
        <input type="text" placeholder="Image Link" v-model="movieData.imageLink">
      </div>
      <div class="col-lg-4 col-md-4">
        <input type="number" placeholder="Release Year" v-model="movieData.year">
      </div>
      <div class="genre__input__checkbox" v-for="genre in genres" >
        <label >
          <input type="radio" name="genre" :value="genre" v-model="movieData.genre" />
          {{ genre }}
        </label>
      </div>
      <div class="col-lg-12 text-center">
        <textarea
          placeholder="Your Review"
          v-model="movieData.review"
        ></textarea>
        <button type="submit" class="site-btn" @click.prevent="addNewData">
          Add Review
        </button>
      </div>
    </div>
    {{ movieData }}
  </form>
</template>

<script>
export default {
  data() {
    return {
      movieData: {
        id: null,
        name: "",
        year: null,
        genre: "",
        review: "",
        imageLink: ""
      },
    };
  },
  methods: {
    addNewData(){
      let newId = this.$store.getters.lastIdMovie + 1
      this.$store.commit('addNewMovie',{id: newId, ...this.movieData})
      this.$router.push('/')
    }
  },
  computed: {
    genres() {
      return this.$store.getters.genreData;
    },
  }
};
</script>


<style scoped>
input[type="text"], input[type="number"] {
  width: 100%;
  height: 50px;
}

.genre__input input.genre__input__add {
  margin-bottom: 20px;
}

.genre__input input::placeholder {
  color: #b2b2b2;
}

.genre__input__checkbox {
  margin-bottom: 10px;
}

.genre__input__checkbox label {
  position: relative;
  font-size: 16px;
  color: #1c1c1c;
  padding-left: 30px;
  cursor: pointer;
}

.genre__input__checkbox label input {
  width: 20px;
  height: 20px;
}
</style>