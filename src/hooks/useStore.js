import store from '../store'

export default function useStore(module) {
  if (module && typeof module === 'string') {
    return store[module.toLowerCase()]
  }

  return store
}
