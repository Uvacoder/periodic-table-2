<template>
  <div class="item" :class="additionalClasses">
    <div class="item__icon">
      <unicon :name="props.icon" />
    </div>
    <div class="item__label" v-if="props.isExpanded">
      {{ props.label }}
    </div>
    <div class="item__toggle" v-if="props.isExpanded">
      <unicon name="angle-down" />
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  isExpanded: {
    type: Boolean,
    default: false
  }
})

const additionalClasses = computed(() => ({
  'item--expanded': props.isExpanded
}))
</script>

<style scoped lang="scss">
@use '~@/style/variables';

.item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: variables.$radius-sm;

  &:hover {
    background-color: lighten(variables.$light-gray, 12);
  }

  &__icon,
  &__label,
  &__toggle {
    line-height: 1;
  }

  &__label {
    margin-left: 0.5rem;
  }

  &__toggle {
    margin-left: auto;
  }
}
</style>
