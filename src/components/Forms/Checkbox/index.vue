<template>
  <div class="form-checkbox" :class="additionalClasses">
    <label :for="props.id">
      <span class="form-checkbox__box">
        <unicon
          v-if="isChecked"
          name="check"
          fill="currentColor"
          width="1.2rem"
        />
      </span>
      {{ props.label }}
    </label>

    <input
      v-show="false"
      type="checkbox"
      :id="props.id"
      :checked="isChecked"
      @input="check"
    />
  </div>
</template>

<script setup>
import { computed, defineEmits, defineProps, onMounted } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    // v-model
  },
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  value: {
    // v-model
  },
  checked: {
    type: Boolean,
    default: false
  }
})

const additionalClasses = computed(() => ({
  'form-checkbox--checked': isChecked.value
}))

const isModelArray = computed(() => {
  return Array.isArray(props.modelValue)
})

const isChecked = computed(() => {
  return isModelArray.value
    ? props.modelValue.includes(props.value)
    : !!props.modelValue
})

function check({ target }) {
  if (isModelArray.value) {
    const updateValues = [...props.modelValue]

    if (isChecked.value) {
      updateValues.splice(updateValues.indexOf(props.value), 1)
    } else {
      updateValues.push(props.value)
    }

    emit('update:modelValue', updateValues)
  } else {
    emit('update:modelValue', target.checked)
  }
}

onMounted(() => {
  if (props.checked) {
    emit(
      'update:modelValue',
      isModelArray.value ? [...props.modelValue, props.value] : props.checked
    )
  }
})
</script>

<style scoped lang="scss">
@use '~@/style/variables';

.form-checkbox {
  margin: variables.$form-my 0;

  label {
    display: flex;
    align-items: center;
    gap: variables.$form-gap;
  }

  &--checked &__box {
    background-color: variables.$blue;
  }

  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.2rem;
    height: 1.2rem;
    color: variables.$light;
    background-color: variables.$light-gray;
    border-radius: variables.$radius-sm;
  }
}
</style>
