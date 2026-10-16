import type { ContentMap, InfoContent } from '../types/SenseModule'

const STORAGE_KEY = 'duyu-content-overrides-v1'

function readOverrides(): ContentMap {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as ContentMap
  } catch {
    return {}
  }
}

export const contentRepository = {
  get(key: string, fallback: InfoContent): InfoContent {
    return readOverrides()[key] ?? fallback
  },

  update(key: string, content: InfoContent): void {
    const overrides = readOverrides()
    overrides[key] = content
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides))
  },

  reset(key: string): void {
    const overrides = readOverrides()
    delete overrides[key]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides))
  },
}
