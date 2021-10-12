<template>
  <div class="element" :class="aditionalClasses">
    <div class="element__number">
      {{ props.number }}
    </div>
    <h2 class="element__symbol">
      {{ props.symbol }}
    </h2>
    <div class="element__name">
      {{ props.name }}
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  number: {
    type: Number,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  hasOffset: {
    type: Boolean,
    default: false
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})

const aditionalClasses = computed(() => ({
  'element--offset': props.hasOffset,
  'element--selected': props.isSelected,
  [props.category]: true
}))
</script>

<style scoped lang="scss">
@use '~@/style/variables';
@use '~@/style/elements';

.element {
  display: flex;
  flex-direction: column;
  width: variables.$element-width;
  height: variables.$element-height;
  margin: 0.11rem;
  padding: 0.3rem;
  font-family: variables.$default-font;
  color: variables.$dark;
  border: variables.$default-border;
  border-radius: variables.$radius;
  background-color: variables.$light;
  transition: variables.$default-transition;
  user-select: none;
  cursor: pointer;

  @each $category, $color in elements.$colors {
    &.#{$category}:hover,
    &--selected.#{$category} {
      color: variables.$dark;
      background-color: $color;
    }
  }

  &__number {
    display: flex;
    font-size: 0.8rem;
    line-height: 1;
  }

  &__symbol {
    text-align: center;
    font-weight: 600;
  }

  &__name {
    margin: 0 -0.3rem;
    text-align: center;
    font-size: 0.7rem;
    line-height: 1;
  }

  &--offset {
    margin-left: auto;
  }
}
</style>
