<template>
  <ul class="tabs">
    <router-link
      :to="{ name: 'DetailsInfos' }"
      custom
      v-slot="{ navigate, isActive }"
    >
      <li @click="navigate" :class="{ isActive }">
        <unicon name="info-circle" fill="currentColor" />
        General Infos
      </li>
    </router-link>
    <router-link
      :to="{ name: 'DetailsModel' }"
      custom
      v-slot="{ navigate, isActive }"
    >
      <li @click="navigate" :class="{ isActive }">
        <unicon name="atom" fill="currentColor" />
        Atomic Model
      </li>
    </router-link>
    <router-link
      :to="{ name: 'DetailsImages' }"
      custom
      v-slot="{ navigate, isActive }"
    >
      <li @click="navigate" :class="{ isActive }">
        <unicon name="image" fill="currentColor" />
        Images
      </li>
    </router-link>
  </ul>
</template>

<script setup></script>

<style scoped lang="scss">
@use '~@/style/variables';

.tabs {
  display: flex;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  color: variables.$blue;
  border-radius: variables.$radius;
  background-color: #fff;

  li {
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: variables.$radius;
    background-color: #fff;
    cursor: pointer;
    transition: variables.$default-transition;

    &:hover {
      background-color: lighten(variables.$blue, 30);
    }

    // Non-standard class name to reconcile with vue-router API
    &.isActive {
      color: variables.$light;
      background-color: variables.$blue;
      font-weight: bold;
    }
  }
}
</style>
