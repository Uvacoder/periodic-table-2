<template>
  <section class="table">
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
          :has-offset="hasOffsetByNumber(element.number)"
          :color="categoryToColor(element.category)"
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
            :has-offset="!elIndex"
            :color="categoryToColor(element.category)"
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
import Element from '@/components/Element'

// Composables
import { isSelected } from './composables/selection'

const ELEMENTS_NUMBERS_OFFSET = [2, 5, 13, 72, 104]
const CATEGORY_COLORS = {
  noble_gas: '#93ceed',
  alkali_metal: '#ff6666',
  alkaline_earth_metal: '#fedead',
  metalloid: '#cccc9a',
  nonmetal: '#f1ff90',
  halogen: '#c1feff',
  post_transition_metal: '#cccccc',
  transition_metal: '#ffc0bf',
  lanthanide: '#ffbffe',
  actinide: '#ff99cb'
}

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

function categoryToColor(rawCategory) {
  const category = rawCategory.replace(/-|\s|,/gi, '_')

  return CATEGORY_COLORS[category]
}
</script>

<style scoped lang="scss">
@use '~@/style/variables';

.table {
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
