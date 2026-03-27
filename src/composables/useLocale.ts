import { computed, ref } from 'vue'

export type SiteLang = 'ru' | 'kk'

const STORAGE_KEY = 'dobre-serdce-lang'

const initialLang = (): SiteLang => {
  if (typeof window === 'undefined') {
    return 'ru'
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'ru' || stored === 'kk') {
    return stored
  }

  return 'ru'
}

const lang = ref<SiteLang>(initialLang())

const syncDocumentLang = (value: SiteLang) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = value === 'kk' ? 'kk' : 'ru'
  }
}

syncDocumentLang(lang.value)

export function useLocale() {
  const setLang = (value: SiteLang) => {
    lang.value = value
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, value)
    }
    syncDocumentLang(value)
  }

  const isRu = computed(() => lang.value === 'ru')

  return {
    lang,
    isRu,
    setLang,
  }
}
