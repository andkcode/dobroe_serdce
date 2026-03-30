import { createI18n } from 'vue-i18n'
import ru from './locales/ru'
import kk from './locales/kk'

const STORAGE_KEY = 'dobre-serdce-lang'

const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
const initialLocale = stored === 'kk' ? 'kk' : 'ru'

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'ru',
  messages: { ru, kk },
})
