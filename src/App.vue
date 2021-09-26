<template>
  <div class="overlay">
    <header class="overlay__branding">
      <Navbar />
    </header>

    <div class="overlay__menu">
      <Menu />
    </div>

    <div class="overlay__pages">
      <router-view />
    </div>
  </div>
</template>

<script setup>
// Components
import Navbar from './components/Navbar'
import Menu from './components/Menu'
</script>

<style lang="scss">
@use '~@/style/variables';

$grid-bars-dimention: 4.2rem;

.overlay {
  display: grid;
  grid-template:
    'menu branding' #{$grid-bars-dimention}
    'menu pages' 1fr
    / auto 1fr;
  background-color: variables.$light;

  &__branding {
    grid-area: branding;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
  }

  &__menu {
    grid-area: menu;
    z-index: 999;
  }

  &__pages {
    grid-area: pages;
    width: 100%;
    height: calc(100vh - $grid-bars-dimention);
    padding: 0.5rem;
    overflow: auto;
  }
}
</style>
