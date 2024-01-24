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

export const changeThemeColor = (themeColor: string) => {
  const root = document.documentElement
  root.style.setProperty('--color-primary', themeColor)
  root.style.setProperty('--color-hover-primary-bg', replaceAlpha(themeColor, 0.08))
  root.style.setProperty('--color-hover-selected-primary-bg', replaceAlpha(themeColor, 0.16))
}

export const replaceAlpha = (colorString: string, newAlpha: number) => {
  const rgbaRegex = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)$/
  const match = colorString.match(rgbaRegex)
  if (!match) {
    throw new Error('Invalid RGBA color string format')
  }
  const [, r, g, b, _] = match
  return `rgba(${r}, ${g}, ${b}, ${newAlpha})`
}

export const deepClone = (source: any) => {
  if (source === null || typeof source !== 'object') return source

  if (Array.isArray(source)) {
    const newArray: any[] = []
    for (const item of source) {
      newArray.push(deepClone(item))
    }
    return newArray
  }

  const newObject: any = {}
  for (const k in source) {
    if (source.hasOwnProperty(k)) {
      newObject[k] = deepClone(source[k])
    }
  }
  return newObject
}
