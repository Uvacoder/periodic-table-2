import { computed, reactive, watch } from 'vue'

export default function useGroups() {
  const state = reactive({
    allGroups: false,
    groups: []
  })

  const categories = [
    { label: 'Noble gas', value: 'noble_gas' },
    { label: 'Alkali metal', value: 'alkali_metal' },
    { label: 'Alkaline earth metal', value: 'alkaline_earth_metal' },
    { label: 'Metalloid', value: 'metalloid' },
    { label: 'Nonmetal', value: 'nonmetal' },
    { label: 'Halogen', value: 'halogen' },
    { label: 'Post transition metal', value: 'post_transition_metal' },
    { label: 'Transition metal', value: 'transition_metal' },
    { label: 'Lanthanide', value: 'lanthanide' },
    { label: 'Actinide', value: 'actinide' }
  ]

  const isAllGroupsChecked = computed(
    () => state.groups.length === categories.length
  )

  watch(() => state.allGroups, handleAllGroups)
  watch(() => state.groups, handleGroups)

  function handleAllGroups(value) {
    if (value) {
      state.groups = categories.map(item => item.value)
    } else {
      if (isAllGroupsChecked.value) {
        state.groups = []
      }
    }
  }

  function handleGroups(value) {
    state.allGroups = isAllGroupsChecked.value
  }

  return {
    categories,
    state
  }
}
