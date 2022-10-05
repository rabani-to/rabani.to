export const classnames = (...classList) => classList.filter(Boolean).join(" ")
export const noOp = () => {}

export function debounceEvent(callback, time) {
  let timer = null
  return function withDebounce(...props) {
    clearTimeout(timer)
    timer = setTimeout(() => callback(...props), time)
  }
}
