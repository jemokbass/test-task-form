<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import FormLayout from "@/layouts/FormLayout";
import MainLayout from "@/layouts/MainLayout";
export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || "form") + "-layout";
    },
  },
  components: {
    FormLayout,
    MainLayout,
  },
};
</script>

<style lang="scss">
@import "assets/style-reset.css";
@import "assets/styles.scss";
</style>
