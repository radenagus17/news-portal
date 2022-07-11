<template>
  <div class="col-md-3">
    <div class="sticky-top mb-3">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">News Category</h4>
        </div>
        <div class="card-body">
          <Category :category="category" v-for="category in categories" :key="category.id"></Category>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Search By Title</h3>
        </div>
        <div class="card-body">
          <!-- /btn-group -->
          <div class="input-group">
            <input id="new-event" type="text" class="form-control" v-model="searchTitle" placeholder="News Title" />
            <div class="input-group-append">
              <button id="add-new-event" type="button" @click="handleSubmitSearch" class="btn btn-primary">Search</button>
            </div>
            <!-- /btn-group -->
          </div>
          <!-- /input-group -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "./Category.vue";
export default {
  name: "Sidebar",

  data() {
    return {
      categories: [],
      searchTitle: "",
    };
  },

  methods: {
    async getCategories() {
      try {
        const resp = await fetch(`${this.$baseUrl}/categories/pub`);
        const { categories } = await resp.json();
        this.categories = categories;
      } catch (error) {
        console.log(error);
      }
    },

    async handleSubmitSearch() {
      await this.$router.push(`/list_news?title=${this.searchTitle}`);
      this.searchTitle = "";
    },
  },

  async created() {
    await this.getCategories();
  },

  components: {
    Category,
  },
};
</script>

<style></style>
