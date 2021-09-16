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
  hasOffset: {
    type: Boolean,
    default: false
  },
  edgeBottom: {
    type: Boolean,
    default: false
  },
  edgeLeft: {
    type: Boolean,
    default: false
  }
})

const aditionalClasses = computed(() => ({
  offset: props.hasOffset,
  'edge-bottom': props.edgeBottom,
  'edge-left': props.edgeLeft
}))
</script>

<style scoped lang="scss">
@use '~@/style/variables';

.element {
  display: flex;
  flex-direction: column;
  width: variables.$element-width;
  height: variables.$element-height;
  padding: 0.2rem;
  border-right: 1px solid gray;
  border-top: 1px solid gray;
  user-select: none;

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
    margin: 0 -0.2rem;
    text-align: center;
    font-size: 0.7rem;
    line-height: 1;
  }

  &.offset {
    margin-left: auto;
  }

  &.edge-bottom {
    border-bottom: 1px solid gray;
  }

  &.edge-left {
    border-left: 1px solid gray;
  }
}
</style>
