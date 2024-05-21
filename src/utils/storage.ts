export const SetItem = (key: string, value: any) => {
  window.localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value)
}

export const GetItem = (key: string) => {
  const value = window.localStorage.getItem(key)
  try {
    return value ? JSON.parse(value) : value
  } catch (err) {
    return value
  }
}

export const RemoveItem = (key: string) => {
  window.localStorage.removeItem(key)
}

export const RemoveAll = () => {
  window.localStorage.clear()
}
