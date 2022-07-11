<template>
  <div class="container">
    <div class="content-header">
      <div class="row mb-2">
        <div class="col-sm-12">
          <h1 class="m-0">Top News <small>Until Now</small></h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-lg-8 col-xl-8">
        <div class="card mb-2 bg-gradient-dark">
          <img class="card-img-top mx-auto" :src="news.imgUrl" :alt="news.title" style="width: 272px" />
          <div class="card-img-overlay d-flex flex-column justify-content-end">
            <h5 class="card-title text-white font-weight-bolder">{{ news.title }}</h5>
            <p class="card-text text-white pb-2 pt-1">{{ news.content }}</p>
            <router-link class="text-white" :to="{ name: 'DetailNewsPage', params: { id: `${news.id}` } }">See More</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-4">
        <div class="card mb-2 bg-gradient-dark">
          <img class="card-img-top" :src="news1.imgUrl" :alt="news1.title" />
          <div class="card-img-overlay d-flex flex-column justify-content-end">
            <h5 class="card-title text-white font-weight-bolder">{{ news1.title }}</h5>
            <p class="card-text text-white pb-2 pt-1">{{ news1.content }}</p>
            <router-link class="text-white" :to="{ name: 'DetailNewsPage', params: { id: `${news1.id}` } }">See More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "ax"
export default {
  name: "ContentHeader",

  data() {
    return {
      news: [],
      news1: [],
    };
  },

  methods: {
    async getNews(title) {
      try {
        const resp = await fetch(`${this.$baseUrl}/news/pub/pag${title}`);
        const { news } = await resp.json();
        this.news = news[0];
      } catch (error) {
        console.log(error);
      }
    },
    async getNews1(title) {
      try {
        const resp = await fetch(`${this.$baseUrl}/news/pub/pag${title}`);
        const { news } = await resp.json();
        this.news1 = news[0];
      } catch (error) {
        console.log(error);
      }
    },
  },

  async created() {
    await this.getNews("?title=ronaldo");
    await this.getNews1("?title=messi");
  },
};
</script>

<style></style>
