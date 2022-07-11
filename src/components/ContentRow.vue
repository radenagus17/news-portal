<template>
  <div class="col-md-4 col-lg-4 col-xl-4">
    <div class="card mb-2 bg-gradient-dark">
      <img class="card-img-top" :src="news.imgUrl" :alt="news.title" />
      <div class="card-img-overlay d-flex flex-column justify-content-end">
        <h5 class="card-title text-white font-weight-bolder">{{ news.title }}</h5>
        <p class="card-text text-white pb-2 pt-1">{{ news.content }}</p>
        <router-link class="text-white" :to="{ name: 'DetailNewsPage', params: { id: `${news.id}` } }">See More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentRow",
  props: ["news"],
};
</script>

<style></style>
