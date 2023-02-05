<template>
  <div class="detailPage">
    <h1 class="movie-detail__title">
      {{ $route.params.detail.name }}
    </h1>
    <p class="movie-detail__body">
      {{ $route.params.detail.review }} | {{ $route.params.detail.year }}
    </p>
    <img
      class="movie-detail__img"
      alt="Pasta"
      :src="$route.params.detail.link"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
    .detailPage {
        text-align: center;
        margin-top: 50px;
    }

    h1 {
        font-weight: bold;
    }

    img {
        width: 400px;
    }
</style>
