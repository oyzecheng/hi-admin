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

export const validateFileType = (file: File, accept: string): boolean => {
  const fileName = file.name

  if (accept.includes('/')) {
    // 处理通配符，例如 image/* 或 video/*
    const [mainType, subType] = accept.split('/')
    const regex = new RegExp(`^${mainType}/${subType.replace('*', '.*')}$`, 'i')

    return regex.test(file.type)
  } else {
    // 处理具体的扩展名，例如 .jpg, .jpeg
    const acceptedExtensions = accept.split(',')

    for (const extension of acceptedExtensions) {
      const trimmedExtension = extension.trim()
      if (fileName.toLowerCase().endsWith(trimmedExtension.toLowerCase())) {
        return true
      }
    }
  }

  return false
}
