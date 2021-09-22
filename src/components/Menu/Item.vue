<template>
  <div class="item" :class="additionalClasses">
    <div class="item__self" @click="toggleSubitems">
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

    <div class="item__subitems" v-if="isSubitemsOpen">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, reactive } from 'vue'

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

const state = reactive({
  showSubitems: false
})

const isSubitemsOpen = computed(() => {
  return props.isExpanded && state.showSubitems
})

const additionalClasses = computed(() => ({
  'item--expanded': props.isExpanded,
  'item--show-subitems': state.showSubitems
}))

function toggleSubitems() {
  state.showSubitems = !state.showSubitems
}
</script>

<style scoped lang="scss">
@use '~@/style/variables';

.item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &__self {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: variables.$radius-sm;
    cursor: pointer;

    &:hover {
      background-color: lighten(variables.$light-gray, 12);
    }
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

  &__subitems {
    width: 100%;
    padding-left: 1rem;
  }

  &--show-subitems &__toggle {
    transform: rotateZ(180deg);
  }
}
</style>
