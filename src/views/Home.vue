<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <div class="content-wrapper">
      <ContentHeader></ContentHeader>
      <div class="container">
        <section class="content mt-4 mb-4">
          <div class="row">
            <Sidebar></Sidebar>
            <router-view></router-view>
          </div>
          <Pagination></Pagination>
        </section>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ContentHeader from "@/components/ContentHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",

  components: {
    Navbar,
    ContentHeader,
    Sidebar,
    Pagination,
    Footer,
  },
};
</script>
