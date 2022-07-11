<template>
  <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="navbar-brand">
        <img src="/assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: 0.8" />
        <span class="brand-text font-weight-light">News Portal</span>
      </router-link>

      <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Right navbar links -->
      <div class="collapse navbar-collapse order-3" id="navbarCollapse">
        <ul class="navbar-nav ml-auto" v-if="!this.username">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Login' }">Sign In</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Register' }">Sign Up</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="#">Hi, {{ this.username }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'BookmarkPage' }">Bookmark</router-link>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link" @click.prevent="handleClick">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Navbar",

  computed: {
    username() {
      return this.$store.state.username;
    },
  },

  methods: {
    handleClick() {
      Swal.fire({
        title: "Are you sure?",
        text: "You Want to Leave Me Again!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Im Sure!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Bye!",
            text: "See You Again Sir.",
            icon: "success",
          });
          localStorage.clear();
        }
        window.location.reload();
      });
    },
  },

  async created() {
    await this.$store.commit("SET_USERNAME", localStorage.getItem("username"));
  },
};
</script>

<style></style>
