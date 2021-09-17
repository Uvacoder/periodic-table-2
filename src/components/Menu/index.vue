<template>
  <sidebar class="menu">

  </sidebar>
</template>

<script setup>

</script>

<style scoped lang="scss">
@use '~@/style/variables';

.menu {
  width: 3rem;
  height: calc(100vh - 1rem);
  margin: .5rem;
  background-color: variables.$light;
  border-radius: variables.$radius;
}
</style>
