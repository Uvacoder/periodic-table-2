<template>
  <div class="search" :class="aditionalClasses">
    <input
      type="text"
      placeholder="Search for symbol or name"
      @focus="toggleFocus"
      @blur="toggleFocus"
      @input="debounce"
    />
    <button>
      <unicon name="search" fill="currentColor" />
    </button>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'

// Hooks
import { useDebounce, useStore } from '../../hooks'

const search = useStore('search')
const debounce = useDebounce(updatedQuery)

const state = reactive({
  isFocused: false
})

const aditionalClasses = computed(() => ({
  'search--focus': state.isFocused
}))

function toggleFocus() {
  state.isFocused = !state.isFocused
}

function updatedQuery({ target }) {
  search.actions.updateQuery(target.value)
}
</script>

<style scoped lang="scss">
@use '~@/style/variables';

.search {
  display: flex;
  width: 18rem;
  height: 2.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: variables.$radius;
  background-color: #fff;
  transition: variables.$default-transition;
  box-shadow: variables.$small-shadow;

  &--focus {
    width: 20rem;
    box-shadow: variables.$default-shadow;
  }

  input {
    flex: 1;
    border: none;
    font-size: 1rem;
    background-color: transparent;

    &::placeholder {
      color: variables.$light-gray;
    }
  }

  button {
    border: none;
    background-color: transparent;
    color: variables.$light-gray;
  }
}
</style>
