<template>
  <div class="overlay">
    <Menu />
    <div class="pages">
      <router-view />
    </div>
  </div>
</template>

<script setup>
// Components
import Menu from './components/Menu'
</script>

<style lang="scss">
@use '~@/style/variables';

.overlay {
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: variables.$light;

  .pages {
    width: auto;
    height: 100vh;
    overflow: hidden auto;
  }
}
</style>
