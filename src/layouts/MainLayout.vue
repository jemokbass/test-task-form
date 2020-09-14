<template>
  <div class="layout-main">
    <main>
      <section class="forms">
        <div class="forms__inner">
          <div class="forms__close">
            <router-link to="/">&#10006;</router-link>
          </div>
          <router-view />
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: "main-layout",
};
</script>
