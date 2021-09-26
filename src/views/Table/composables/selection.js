// Hooks
import useStore from '@/hooks/useStore'

const categoryStore = useStore('category')
const searchStore = useStore('search')

function isSelected({ symbol, name, category }) {
  return (
    categoryStore.state.selected.includes(category) ||
    selectedBySearch({ symbol, name })
  )
}

function selectedBySearch({ symbol, name }) {
  const { query, type } = searchStore.state
  const queryLower = query.toLowerCase()

  if (!query) {
    return false
  }

  return type === 'symbol'
    ? symbol.toLowerCase().includes(queryLower)
    : name.toLowerCase().includes(queryLower)
}

export { isSelected }
