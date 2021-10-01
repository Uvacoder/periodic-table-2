<template>
  <div class="legend">
    <div class="legend__number">
      1
      <span class="legend__text">Atomic Number</span>
    </div>
    <div class="legend__symbol">
      <strong>H</strong>
      <span class="legend__text">Element Symbol</span>
    </div>
    <div class="legend__name">
      Hydrogen
      <span class="legend__text">Element Name</span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
@use '~@/style/variables';

.legend {
  position: absolute;
  top: 0;
  left: 50%;
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
  transform: translateX(-50%);

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
</style>
