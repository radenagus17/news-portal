<template>
  <div class="col-md-9">
    <div class="row d-flex flex-wrap justify-content-between">
      <ContentRow v-for="news in news" :key="news.id" :news="news"></ContentRow>
    </div>
  </div>
</template>

<script>
import ContentRow from "./ContentRow.vue";
export default {
  name: "ListNews",

  components: {
    ContentRow,
  },

  computed: {
    news() {
      return this.$store.state.news;
    },
  },

  watch: {
    "$route.query.page": {
      handler(newPage) {
        this.$store.dispatch("getNews", `page=${newPage}`);
      },
    },
    "$route.query.Category": {
      handler(newPage) {
        this.$store.dispatch("getNews", `Category=${newPage}`);
      },
    },
    "$route.query.title": {
      handler(newPage) {
        this.$store.dispatch("getNews", `title=${newPage}`);
      },
    },
  },

  async created() {
    if (this.$route.query.page) {
      await this.$store.dispatch("getNews", !this.$route.query.page ? "page=0" : `page=${await this.$route.query.page}`);
    } else if (this.$route.query.Category) {
      await this.$store.dispatch("getNews", !this.$route.query.Category ? "Category=" : `Category=${await this.$route.query.Category}`);
    } else if (this.$route.query.title) {
      await this.$store.dispatch("getNews", !this.$route.query.title ? "title=" : `title=${await this.$route.query.title}`);
    }
  },
};
</script>

<style></style>
