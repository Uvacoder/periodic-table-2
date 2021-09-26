<template>
  <sidebar class="menu" :class="additionalClasses">
    <header class="menu__header">
      <span class="menu__toggle" @click="toggleMenu">
        <unicon :name="defineToggleIcon" />
      </span>
    </header>

    <ul class="menu__items">
      <MenuItem
        label="Group by"
        icon="object-group"
        :is-expanded="state.isOpen"
      >
        <FormCheckbox
          id="all-groups"
          label="All"
          v-model="categories.state.all"
        />
        <FormCheckbox
          v-for="category in categories.list"
          :key="category.value"
          :id="category.value"
          :label="category.label"
          :value="category.value"
          :model-value="categories.global.selected"
          @update:modelValue="categories.handleCategory"
        />
      </MenuItem>
    </ul>
  </sidebar>
</template>

<script setup>
import { computed, reactive } from 'vue'

// Components
import MenuItem from './Item.vue'
import FormCheckbox from '../Forms/Checkbox'

// Composables
import useCategory from './composables/useCategory'

const state = reactive({
  isOpen: false
})

const categories = useCategory()

const defineToggleIcon = computed(() => (state.isOpen ? 'multiply' : 'bars'))
const additionalClasses = computed(() => ({
  'menu--open': state.isOpen
}))

function toggleMenu() {
  state.isOpen = !state.isOpen
}
</script>

<style scoped lang="scss">
@use '~@/style/variables';

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 1rem);
  margin: 0.5rem;
  padding: 0.75rem;
  border-radius: variables.$radius;
  background-color: #fff;
  box-shadow: variables.$default-shadow;
  user-select: none;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }

  &__toggle {
    cursor: pointer;
  }

  &--open {
    width: 300px;
  }

  &--open &__header {
    justify-content: flex-end;
  }

  &__items {
    width: 100%;
  }
}
</style>
