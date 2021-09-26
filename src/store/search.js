import { reactive, watch } from 'vue'

const state = reactive({
  query: '',
  type: 'symbol'
})

// Actions
function updateQuery(value) {
  state.query = value
}

watch(
  () => state.query,
  () => {
    state.type = state.query.length >= 3 ? 'name' : 'symbol'
  }
)

export default {
  state,
  actions: {
    updateQuery
  }
}
