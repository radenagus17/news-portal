<template>
  <div class="card-body" v-if="$route.query.Category">
    <ul class="pagination pagination-md justify-content-center">
      <li class="page-item" v-for="(index, page) in totalPage" :key="index">
        <router-link class="page-link" :to="`/list_news?Category=${$route.query.Category}&page=${page}`">{{ index }}</router-link>
      </li>
    </ul>
  </div>
  <div class="card-body" v-else>
    <ul class="pagination pagination-md justify-content-center">
      <li class="page-item" v-for="(index, page) in totalPage" :key="index">
        <router-link class="page-link" :to="`/list_news?page=${page}`">{{ index }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pagination",

  computed: {
    totalPage() {
      return this.$store.state.totalPage;
    },
  },

  async created() {
    await this.$store.dispatch("getNews");
  },
};
</script>

<style></style>
