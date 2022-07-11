<template>
  <div id="external-events">
    <div class="external-event" @click="handleClick(category.name)" :value="category.id">{{ category.name }}</div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["category"],

  methods: {
    async handleClick(category) {
      this.$router.push(`/list_news?Category=${category}`);
    },
  },
};
</script>

<style></style>
