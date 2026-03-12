<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Про нас',      href: '#about' },
  { label: 'Послуги',      href: '#services' },
  { label: 'Проживання',   href: '#accommodation' },
  { label: 'Документи',    href: '#documents' },
  { label: 'Ціна',         href: '#price' },
  { label: 'Контакти',     href: '#contacts' },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer style="background: var(--color-ink-900);" class="relative overflow-hidden">
    <!-- Gold top accent line -->
    <div
      class="absolute left-0 right-0 top-0 h-px"
      style="background: linear-gradient(90deg, transparent 0%, var(--color-gold-400) 30%, var(--color-brand-500) 70%, transparent 100%);"
    />

    <!-- Decorative background element -->
    <div
      class="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-[0.04]"
      style="background: radial-gradient(circle, var(--color-gold-400) 0%, transparent 70%);"
    />

    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

      <div class="mb-6 flex flex-col items-start gap-3">

        <img
          src="../assets/dobre_serce.svg"
          alt="Логотип Добре серце"
          style="height: 52px; width: auto;"
        />

        <div>
          <div class="font-body text-xs font-400 tracking-widest text-white/35 uppercase">
            Пансіонат для людей похилого віку
          </div>
        </div>
          <p class="mb-7 font-body text-sm font-300 leading-prose text-white/45">
            Приватний комфортабельний пансіонат «Добре серце» забезпечує
            цілодобовий кваліфікований догляд за людьми похилого віку у Вінниці
            з індивідуальним підходом до кожного постояльця.
          </p>
          <a
            href="tel:+380961462910"
            class="inline-flex items-center gap-2 transition-colors duration-200"
            style="color: var(--color-gold-400);"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span class="font-display text-xl font-600">+38 096 146 29 10</span>
          </a>
        </div>

        <!-- ── Navigation column ── -->
        <div>
          <h3 class="mb-5 font-body text-xs font-600 uppercase tracking-[0.2em] text-white/40">
            Навігація
          </h3>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.href">
              <button
                class="group flex items-center gap-2 font-body text-sm text-white/45 transition-colors duration-200 hover:text-white/80"
                @click="scrollTo(link.href)"
              >
                <span
                  class="h-px w-0 transition-all duration-300 group-hover:w-4"
                  style="background: var(--color-gold-400);"
                />
                {{ link.label }}
              </button>
            </li>
          </ul>
        </div>

        <!-- ── Address column ── -->
        <div>
          <h3 class="mb-5 font-body text-xs font-600 uppercase tracking-[0.2em] text-white/40">
            Контакти
          </h3>
          <div class="space-y-4">
            <div>
              <div class="font-body text-sm font-500 text-white/70">🇺🇦 Україна, м. Вінниця</div>
              <div class="mt-0.5 font-body text-sm text-white/40">
                вул. Митрополита Петра Могили, 6А
              </div>
            </div>
            <div>
              <div class="font-body text-sm font-500 text-white/70">Режим роботи:</div>
              <div class="font-body text-sm text-white/40">Цілодобово, 7 днів на тиждень</div>
            </div>
            <div class="mt-2">
              <div
                class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5"
                style="background: rgba(201,169,78,0.12); border: 1px solid rgba(201,169,78,0.2);"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span class="font-body text-xs font-500 text-white/50">Зараз приймаємо заявки</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Bottom bar ── -->
      <div
        class="mt-12 border-t pt-8"
        style="border-color: rgba(255,255,255,0.07);"
      >
        <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p class="font-body text-xs text-white/25">
            © {{ currentYear }} Пансіонат «Добре серце». Всі права захищені.
          </p>
          <div class="flex items-center gap-2">
            <img
              src="../assets/logo.png"
              alt=""
              class="h-4 w-4 rounded-full opacity-25"
            />
            <span class="font-body text-xs text-white/20">
              Створено з турботою та любов'ю до людей
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>