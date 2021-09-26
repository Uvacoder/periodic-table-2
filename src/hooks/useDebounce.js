export default function useDebounce(fn, delay = 500) {
  let timeout = null

  return args => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(args), delay)
  }
}
