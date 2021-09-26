import { reactive } from 'vue'

const state = reactive({
  selected: []
})

// Actions
function updateSelected(categories) {
  state.selected = [...categories]
}

export default {
  state,
  actions: {
    updateSelected
  }
}
