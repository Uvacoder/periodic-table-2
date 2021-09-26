<template>
  <nav class="navbar">
    <h1 class="navbar__title">
      Periodic Table of Chemical Elements
    </h1>
    <Search />
  </nav>
</template>

<script setup>
// Components
import Search from './Search.vue'
</script>

<style scoped lang="scss">
@use '~@/style/variables';

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &__title {
    font-family: variables.$default-font;
    text-transform: uppercase;
    line-height: 1;
  }
}
</style>
