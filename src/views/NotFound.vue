<template>
  <section class="content">
    <div class="error-page mt-5">
      <h2 class="headline text-warning">404</h2>

      <div class="error-content">
        <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

        <p>We could not find the page you were looking for. Meanwhile, you may <router-link :to="{ name: 'Home' }"> return to dashboard</router-link> or try using the search form.</p>
      </div>
      <!-- /.error-content -->
    </div>
    <!-- /.error-page -->
  </section>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style></style>
