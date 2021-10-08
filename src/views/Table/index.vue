<template>
  <section class="table">
    <Legend />

    <div class="table__container">
      <div
        class="table__row"
        v-for="(row, rowIndex) in commomElements"
        :key="rowIndex"
      >
        <Element
          v-for="element in row"
          :key="element.number"
          :number="element.number"
          :symbol="element.symbol"
          :name="element.name"
          :category="defineCategory(element.category)"
          :has-offset="hasOffsetByNumber(element.number)"
          :is-selected="isSelected(element)"
        />
      </div>

      <div class="table__series">
        <div
          class="table__row"
          v-for="(row, rowIndex) in seriesElements"
          :key="rowIndex"
        >
          <Element
            v-for="(element, elIndex) in row"
            :key="element.number"
            :number="element.number"
            :symbol="element.symbol"
            :name="element.name"
            :category="defineCategory(element.category)"
            :has-offset="!elIndex"
            :is-selected="isSelected(element)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Data
import { elements } from '@/assets/data/elements.json'

// Components
import Legend from './Legend.vue'
import Element from '@/components/Element'

// Composables
import { isSelected } from './composables/selection'

const ELEMENTS_NUMBERS_OFFSET = [2, 5, 13, 72, 104]

const seriesElements = [elements.slice(56, 71), elements.slice(88, 103)]
const commomElements = [
  elements.slice(0, 2),
  elements.slice(2, 10),
  elements.slice(10, 18),
  elements.slice(18, 36),
  elements.slice(36, 54),
  [...elements.slice(54, 56), ...elements.slice(71, 86)],
  [...elements.slice(86, 88), ...elements.slice(103, 118)]
]

function hasOffsetByNumber(number) {
  return ELEMENTS_NUMBERS_OFFSET.includes(number)
}

function defineCategory(rawCategory) {
  return rawCategory.replace(/-|\s|,/gi, '_')
}
</script>

<style scoped lang="scss">
@use '~@/style/variables';

.table {
  position: relative;

  &__container {
    width: #{18 * (variables.$element-width + 0.22rem)};
    margin: auto;
  }

  &__row {
    display: flex;
    width: 100%;
  }

  &__series {
    width: 100%;
    margin-top: 1rem;
  }
}
</style>
