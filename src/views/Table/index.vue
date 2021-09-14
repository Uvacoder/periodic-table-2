<template>
  <section class="table">
    <div class="table__container">
      <div
        class="table__row"
        v-for="(row, rowIndex) in commomElements"
        :key="rowIndex"
      >
        <Element
          v-for="(element, elIndex) in row"
          :key="element.number"
          :number="element.number"
          :symbol="element.symbol"
          :name="element.name"
          :has-offset="ELEMENTS_NUMBERS_OFFSET.includes(element.number)"
          :is-edge-bottom="
            rowIndex === commomElements.length - 1 || element.number === 39
          "
          :is-edge-left="
            elIndex === 0 || ELEMENTS_NUMBERS_OFFSET.includes(element.number)
          "
        />
      </div>

      <div class="table__lat-act">
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
            :has-offset="elIndex === 0"
            :is-edge-bottom="rowIndex === seriesElements.length - 1"
            :is-edge-left="elIndex === 0"
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

const ELEMENTS_NUMBERS_OFFSET = [2, 5, 13, 72, 104]

const commomElements = [
  elements.slice(0, 2),
  elements.slice(2, 10),
  elements.slice(10, 18),
  elements.slice(18, 36),
  elements.slice(36, 54),
  [...elements.slice(54, 56), ...elements.slice(71, 86)],
  [...elements.slice(86, 88), ...elements.slice(103, 118)]
]

const seriesElements = [elements.slice(56, 71), elements.slice(88, 103)]
</script>

<style scoped lang="scss">
@use '~@/style/variables';

.table {
  flex: 1;
  display: flex;
  justify-content: center;

  &__container {
    display: flex;
    flex-wrap: wrap;
    width: #{18 * variables.$element-width};
  }

  &__row {
    display: flex;
    width: 100%;
  }

  &__lat-act {
    width: 100%;
    margin: 1rem 0;
  }
}
</style>
