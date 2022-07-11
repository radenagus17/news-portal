<template>
  <div class="wrapper">
    <Navbar></Navbar>

    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="container">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Your Bookmark</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">News</a></li>
                  <li class="breadcrumb-item active">hallo world</li>
                </ol>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </section>
        <section class="content">
          <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-4" v-for="bookmark in bookmarks.slice(0, 3)" :key="bookmark.id">
              <div class="card mb-2 bg-gradient-dark">
                <img class="card-img-top mx-auto" :src="bookmark.News.imgUrl" :alt="bookmark.News.title" />
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 class="card-title text-primary text-white">{{ bookmark.News.title }}</h5>
                  <p class="card-text text-white pb-2 pt-1">{{ bookmark.News.content }}</p>
                  <router-link class="text-white" :to="{ name: 'DetailNewsPage', params: { id: `${bookmark.News.id}` } }">See More</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-4" v-for="bookmark in bookmarks.slice(3, 6)" :key="bookmark.id">
              <div class="card mb-2 bg-gradient-dark">
                <img class="card-img-top mx-auto" :src="bookmark.News.imgUrl" :alt="bookmark.News.title" />
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 class="card-title text-primary text-white">{{ bookmark.News.title }}</h5>
                  <p class="card-text text-white pb-2 pt-1">{{ bookmark.News.content }}</p>
                  <router-link class="text-white" :to="{ name: 'DetailNewsPage', params: { id: `${bookmark.News.id}` } }">See More</router-link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "BookmarkPage",

  components: {
    Navbar,
    Footer,
  },

  computed: {
    bookmarks() {
      return this.$store.state.bookmarks;
    },
  },

  async created() {
    await this.$store.dispatch("getBookmark", localStorage.getItem("idUser"));
  },
};
</script>

<style></style>
