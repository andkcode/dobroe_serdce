import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSeoMeta, useHead } from '#imports'

export const useSeo = (options?: {
  title?: string
  description?: string
  image?: string
  path?: string
}) => {
  const { t, locale } = useI18n()
  const baseUrl = 'https://dobroe-serdce.kz'

  const currentUrl = computed(() => {
    if (locale.value === 'en') {
      return `${baseUrl}${options?.path || '/'}`
    }
    return `${baseUrl}/${locale.value}${options?.path || '/'}`
  })

  const title = options?.title || t('seo.default.title')
  const description = options?.description || t('seo.default.description')
  const image = options?.image || `${baseUrl}/images/about/team.jpg`

  useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogUrl: currentUrl.value,
    ogImage: image,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
  })

  useHead({
    title,
    link: [
      { rel: 'canonical', href: currentUrl.value },
    ],
  })
}