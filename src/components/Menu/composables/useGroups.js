import { computed, reactive, watch } from 'vue'
import useStore from '@/hooks/useStore'

export default function useGroups() {
  const categoryStore = useStore('category')

  const state = reactive({
    all: false,
    groups: []
  })

  const categories = [
    { label: 'Noble gas', value: 'noble gas' },
    { label: 'Alkali metal', value: 'alkali metal' },
    { label: 'Alkaline earth metal', value: 'alkaline earth metal' },
    { label: 'Metalloid', value: 'metalloid' },
    { label: 'Nonmetal', value: 'nonmetal' },
    { label: 'Halogen', value: 'halogen' },
    { label: 'Post-transition metal', value: 'post-transition metal' },
    { label: 'Transition metal', value: 'transition metal' },
    { label: 'Lanthanide', value: 'lanthanide' },
    { label: 'Actinide', value: 'actinide' }
  ]

  const isAllChecked = computed(() => state.groups.length === categories.length)

  watch(() => state.all, handleAll)
  watch(() => state.groups, handleGroups, { immediate: true })

  function handleAll(value) {
    if (value) {
      state.groups = categories.map(item => item.value)
    } else {
      if (isAllChecked.value) {
        state.groups = []
      }
    }
  }

  function handleGroups(value) {
    state.all = isAllChecked.value
    categoryStore.actions.updateCategories(value)
  }

  return {
    categories,
    state
  }
}
