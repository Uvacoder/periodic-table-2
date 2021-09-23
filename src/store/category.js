import { computed, reactive } from 'vue'

const state = reactive({
  selectedCategories: []
})

// Getters
const isCategorySelected = category =>
  computed(() => state.selectedCategories.includes(category))

// Actions
function updateCategories(categories) {
  state.selectedCategories = [...categories]
}

function clearAll() {
  state.selectedCategories = []
}

export default {
  state,
  getters: {
    isCategorySelected
  },
  actions: {
    updateCategories,
    clearAll
  }
}
