import { computed, reactive, watch } from 'vue'
import useStore from '@/hooks/useStore'

export default function useGroups() {
  const categoryStore = useStore('category')
  const global = categoryStore.state

  const state = reactive({
    all: false
  })

  const list = [
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

  const isAllChecked = computed(() => global.selected.length === list.length)

  watch(() => state.all, handleAll)

  function handleAll(value) {
    if (value) {
      handleCategory(list.map(item => item.value))
    } else {
      if (isAllChecked.value) {
        handleCategory([])
      }
    }
  }

  function handleCategory(categories) {
    categoryStore.actions.updateSelected(categories)
  }

  return {
    list,
    state,
    global,
    handleCategory
  }
}
