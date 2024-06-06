import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { message } from 'ant-design-vue'

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
  root.style.setProperty('--color-primary-bg', replaceAlpha(themeColor, 0.16))
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
    if (Object.prototype.hasOwnProperty.call(source, k)) {
      newObject[k] = deepClone(source[k])
    }
  }
  return newObject
}

export const random = (min = 0, max = 10000) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const getParamsId = (route: RouteLocationNormalizedLoaded) => {
  if (Array.isArray(route.params.id)) {
    return route.params.id[0]
  }
  return route.params.id
}

export const copyToClipboard = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        message.success('复制成功！')
      })
      .catch(() => {
        message.error('复制失败！')
      })
  } else {
    message.error('当前浏览器不支持自动复制，请手动复制！')
  }
}

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
