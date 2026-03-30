import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export type SiteLang = 'ru' | 'kk'

const STORAGE_KEY = 'dobre-serdce-lang'

export function useLocale() {
  const { locale } = useI18n()

  const setLang = (value: SiteLang) => {
    locale.value = value
    localStorage.setItem(STORAGE_KEY, value)
    document.documentElement.lang = value
  }

  const isRu = computed(() => locale.value === 'ru')

  return {
    lang: locale,
    isRu,
    setLang,
  }
}
