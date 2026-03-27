<!-- ============================================================
     Footer.vue — COLORS ONLY CHANGED
     Changes:
       • sapphire-800 bg → unchanged (already correct)
       • gold-400 phone/lines → brand-500 (unified gold token)
       • rgba(201,169,78,...) badge → rgba(249,189,21,...) brand-500 based
       • bg-emerald-400 pulse dot → bg-brand-400 (warm gold pulse, friendlier)
     ============================================================ -->
<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '@/composables/useLocale'

const { lang } = useLocale()
const currentYear = new Date().getFullYear()

const navLinks = computed(() => {
  if (lang.value === 'kk') {
    return [
      { label: 'Біз туралы', href: '#about' },
      { label: 'Қызметтер', href: '#services' },
      { label: 'Тұру', href: '#accommodation' },
      { label: 'Құжаттар', href: '#documents' },
      { label: 'Баға', href: '#price' },
      { label: 'Байланыс', href: '#contacts' },
    ]
  }

  return [
    { label: 'О нас', href: '#about' },
    { label: 'Услуги', href: '#services' },
    { label: 'Проживание', href: '#accommodation' },
    { label: 'Документы', href: '#documents' },
    { label: 'Цена', href: '#price' },
    { label: 'Контакты', href: '#contacts' },
  ]
})

const ui = computed(() => {
  if (lang.value === 'kk') {
    return {
      tagline: 'Қарттарға арналған пансионат',
      description:
        '«Доброе сердце» жеке пансионаты Астана қаласында қарт адамдарға тәулік бойы кәсіби күтім көрсетеді.',
      navTitle: 'Навигация',
      contactsTitle: 'Байланыс',
      city: '🇰🇿 Қазақстан, Астана қ.',
      street: 'Республика даңғылы',
      hoursTitle: 'Жұмыс режимі:',
      hoursText: 'Тәулік бойы, аптасына 7 күн',
      status: 'Қазір өтінім қабылдаймыз',
      rights: 'Пансионат «Доброе сердце». Барлық құқықтар қорғалған.',
      madeWithCare: 'Адамдарға деген қамқорлықпен жасалды',
    }
  }

  return {
    tagline: 'Пансионат для пожилых людей',
    description:
      'Частный комфортабельный пансионат «Доброе сердце» обеспечивает круглосуточный квалифицированный уход за пожилыми людьми в Астане с индивидуальным подходом к каждому проживающему.',
    navTitle: 'Навигация',
    contactsTitle: 'Контакты',
    city: '🇰🇿 Казахстан, г. Астана',
    street: 'просп. Республики',
    hoursTitle: 'Режим работы:',
    hoursText: 'Круглосуточно, 7 дней в неделю',
    status: 'Сейчас принимаем заявки',
    rights: 'Пансионат «Доброе сердце». Все права защищены.',
    madeWithCare: 'Создано с заботой и любовью к людям',
  }
})

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer style="" class="relative overflow-hidden">
    <!-- top accent line: brand-500 gold -->
    <div
      class="absolute left-0 right-0 top-0 h-px"
      style="background: linear-gradient(90deg, transparent 0%, var(--color-brand-500) 30%, var(--color-brand-400) 70%, transparent 100%);"
    />
    <div
      class="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-[0.04]"
      style="background: radial-gradient(circle, var(--color-brand-400) 0%, transparent 70%);"
    />

    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="ds-logo__img-wrap" style="position: relative; display: inline-block; width: fit-content;">
            <div style="
              position: absolute;
              top: -5px;
              left: 38%;
              transform: translateX(-50%);
              font-family: var(--font-family-body, system-ui, sans-serif);
              font-size: 0.70rem;
              font-weight: 700;
              letter-spacing: 0.18em;
              text-transform: uppercase;
              color: var(--color-brand-500);
              white-space: nowrap;
              pointer-events: none;
            ">Астана</div>
            <img
              src="../assets/dobroe_serdce.png"
              alt="Логотип Доброе сердце"
              class="ds-logo__img"
              style="height: 44px; width: auto; display: block;"
            />
          </div>
          <div class="mt-3">
            <div class="font-body text-xs font-400 tracking-widest text-black/35 uppercase">
              {{ ui.tagline }}
            </div>
            <p class="mb-7 font-body text-sm font-300 leading-prose text-black/45">
              {{ ui.description }}
            </p>
          </div>
          <!-- phone: brand-500 gold -->
          <a
            href="tel:+380961462910"
            class="inline-flex items-center gap-2 duration-200"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span class="font-500">+38 096 146 29 10</span>
          </a>
        </div>

        <div>
          <h3 class="mb-5 font-body text-xs font-600 uppercase tracking-[0.2em] text-black/40">
            {{ ui.navTitle }}
          </h3>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.href">
              <button
                class="group flex items-center gap-2 font-body text-sm text-black/45 transition-colors duration-200 hover:text-black/80"
                @click="scrollTo(link.href)"
              >
                <!-- hover line: brand-500 gold -->
                <span
                  class="h-px w-0 transition-all duration-300 group-hover:w-4"
                  style="background: var(--color-brand-500);"
                />
                {{ link.label }}
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="mb-5 font-body text-xs font-600 uppercase tracking-[0.2em] text-black/40">
            {{ ui.contactsTitle }}
          </h3>
          <div class="space-y-4">
            <div>
              <div class="font-body text-sm font-500 text-black/70">{{ ui.city }}</div>
              <div class="mt-0.5 font-body text-sm text-black/40">{{ ui.street }}</div>
            </div>
            <div>
              <div class="font-body text-sm font-500 text-black/70">{{ ui.hoursTitle }}</div>
              <div class="font-body text-sm text-black/40">{{ ui.hoursText }}</div>
            </div>
            <div class="mt-2">
              <!-- badge: brand-500 gold tinted (was rgba(201,169,78,...)) -->
              <div
                class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
                style="background: rgba(249,189,21,0.12); border: 1px solid rgba(249,189,21,0.22);"
              >
                <!-- pulse dot: brand-400 warm gold (was emerald-400 green) -->
                <span class="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                <span class="font-body text-xs font-500 text-black/50">{{ ui.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-12 border-t pt-8"
        style="border-color: rgba(255,255,255,0.07);"
      >
        <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p class="font-body text-xs text-black/25">
            © {{ currentYear }} {{ ui.rights }}
          </p>
          <div class="flex items-center gap-2">
            <img src="../assets/logo.png" alt="" class="h-4 w-4 rounded-full opacity-25" />
            <span class="font-body text-xs text-black/20">{{ ui.madeWithCare }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ds-logo__img-wrap { position: relative; flex-shrink: 0; display: inline-block; width: fit-content; }
.ds-logo__img { height: 40px; width: auto; object-fit: contain; }
</style>