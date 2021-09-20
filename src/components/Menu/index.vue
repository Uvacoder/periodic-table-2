<template>
  <sidebar class="menu"> </sidebar>
</template>

<script setup></script>

<style scoped lang="scss">
@use '~@/style/variables';

.menu {
  width: 3rem;
  height: calc(100vh - 1rem);
  margin: 0.5rem;
  border-radius: variables.$radius;
  background-color: variables.$light;
  box-shadow: variables.$default-shadow;
}
</style>
