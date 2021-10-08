<template>
  <div class="legend">
    <ul class="legend-category">
      <li v-for="(category, key) in categories" :key="key">
        <span :class="key"></span> {{ category }}
      </li>
    </ul>

    <div class="legend-element">
      <div class="legend-element__number">
        1
        <span class="legend-element__text">Atomic Number</span>
      </div>
      <div class="legend-element__symbol">
        <strong>H</strong>
        <span class="legend-element__text">Element Symbol</span>
      </div>
      <div class="legend-element__name">
        Hydrogen
        <span class="legend-element__text">Element Name</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import categories from '../../assets/data/categories'
</script>

<style scoped lang="scss">
@use '~@/style/variables';
@use '~@/style/elements';

$legend-color-width: 200px;

.legend {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 1rem;
  left: 50%;
  transform: translateX(-77.5%);

  &-category {
    display: flex;
    flex-wrap: wrap;
    width: $legend-color-width * 2;

    li {
      display: flex;
      align-items: center;
      width: $legend-color-width;

      span {
        display: block;
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;

        @each $element, $color in elements.$colors {
          &.#{$element} {
            background-color: $color;
          }
        }
      }
    }
  }

  &-element {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: variables.$element-width * 1.75;
    height: variables.$element-height * 1.75;
    padding: 0.5rem;
    padding-bottom: 1.25rem;
    font-family: variables.$default-font;
    font-size: 1rem;
    line-height: 1;
    color: variables.$dark;
    border: variables.$default-border;
    border-radius: variables.$radius * 1.25;

    &__symbol,
    &__name {
      text-align: center;
    }

    &__symbol {
      strong {
        font-size: 2rem;
      }
    }

    &__number,
    &__symbol,
    &__name {
      position: relative;
      opacity: 0.65;
      cursor: pointer;

      &:hover {
        opacity: 1;

        .legend__text {
          opacity: 1;
        }
      }
    }

    &__text {
      position: absolute;
      top: 50%;
      left: -1.25rem;
      width: 140px;
      padding: 0.25rem 0.5rem;
      font-size: 0.9rem;
      font-family: variables.$secondary-font, sans-serif;
      text-align: center;
      line-height: 1;
      border-radius: variables.$radius-sm;
      background-color: variables.$light-gray;
      transform: translate(-100%, -50%);
      pointer-events: none;
      opacity: 0;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: variables.$radius-sm / 2;
        background-color: variables.$light-gray;
        transform: translate(50%, -50%) rotateZ(45deg);
      }
    }
  }
}
</style>
