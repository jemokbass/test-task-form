<template>
  <div class="layout">
    <div class="layout__container">
      <main>
        <router-view />
      </main>
    </div>
    <div class="layout__timer">
      <span>{{date | date('datetime')}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "form-layout",
  data: () => ({
    date: new Date(),
    intervall: null,
  }),
  mounted() {
    this.intervall = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.intervall);
  },
};
</script>
