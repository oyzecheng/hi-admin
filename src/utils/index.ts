export const generateKey = (length = 8) => {
  const values = new Uint8Array(length)
  window.crypto.getRandomValues(values)

  return Array.from(values, (byte) => byte.toString(16).padStart(2, '0')).join('')
}

export const flattenTree = (tree: any[] = []) => {
  const flatArray: any[] = []

  const flatten = (node: any) => {
    flatArray.push(node)
    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        flatten(child)
      }
    }
  }
  for (const item of tree) {
    flatten(item)
  }
  return flatArray
}

export const debounce = <T extends (...args: any[]) => void>(func: T, delay = 500) => {
  let timeoutId: number | undefined

  return function debounced(...args: Parameters<T>): any {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func(...args)
      timeoutId = undefined
    }, delay)
  }
}
