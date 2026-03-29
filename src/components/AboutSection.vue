<script setup lang="ts">
import { computed } from 'vue'
import logoBlue from "../assets/logo-blue.png"
import { useLocale } from '@/composables/useLocale'

const { lang } = useLocale()

const ui = computed(() => {
  if (lang.value === 'kk') {
    return {
      eyebrow: 'Біз туралы',
      titleBlue: 'Біздің миссиямыз',
      titleGold: '— сіздің тыныштығыңыз бен амандығыңыз',
      intro:
        'Қарттар пансионатын таңдағанда шынайы қамқорлық бар орынды табу маңызды. «Доброе сердце» пансионатында әр адам әрқашан бірінші орында.',
      outro:
        'Қарттар үйі туралы көзқарасыңызды өзгерту үшін пансионатқа келіп, тұрғындармен және қызметкерлермен жеке сөйлесуге шақырамыз.',
      ctaCall: 'Бізбен байланысу',
      ctaServices: 'Біздің қызметтер',
      yearsLabel: 'Жыл тәжірибесі',
      badgeSubtitle: 'қамқорлық пен сүйіспеншілікпен',
      missions: [
        'Әрбір тұрғынға сапалы кәсіби күтім көрсету',
        'Тұру мен демалысқа қолайлы орта қалыптастыру',
        'Әр адамға көңіл бөліп, қамқорлық таныту',
      ],
    }
  }

  return {
    eyebrow: 'О нас',
    titleBlue: 'Наша миссия',
    titleGold: '— ваш покой и благополучие',
    intro:
      'Выбирая пансионат для пожилых людей, важно найти место, где царит настоящая забота. В «Добром сердце» мы ставим человека на первое место.',
    outro:
      'Чтобы изменить своё восприятие дома для пожилых людей, мы приглашаем посетить пансионат лично и пообщаться с проживающими и персоналом.',
    ctaCall: 'Связаться с нами',
    ctaServices: 'Наши услуги',
    yearsLabel: 'Лет опыта',
    badgeSubtitle: 'с заботой и любовью',
    missions: [
      'Обеспечить качественный квалифицированный уход за каждым проживающим',
      'Создать благоприятную атмосферу для проживания и досуга',
      'Уделить каждому человеку внимание, выслухать его, окружить заботой',
    ],
  }
})
</script>

<template>
  <section id="about" class="relative overflow-hidden bg-ivory-50 py-20 lg:py-32">
    <div
      class="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/3 rounded-full opacity-40"
      style="background: radial-gradient(circle, var(--color-sapphire-50) 0%, transparent 70%);"
    />
    <div
      class="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full opacity-30"
      style="background: radial-gradient(circle, var(--color-ivory-300) 0%, transparent 70%);"
    />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid items-center gap-16 lg:grid-cols-2 xl:gap-24">

        <div class="relative" data-animate>
          <div class="relative overflow-hidden rounded-3xl shadow-lift">
            <img
              src="../assets/about/care.jpg"
              alt="Персонал пансионата ухаживает за пожилым человеком"
              class="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[460px]"
              loading="lazy"
              decoding="async"
            />
            <div
              class="absolute inset-0 rounded-3xl"
              style="box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);"
            />
          </div>

          <div
            class="absolute -right-6 top-8 hidden overflow-hidden rounded-2xl shadow-lift lg:block"
            style="width: 180px; height: 200px;"
          >
            <img
              src="../assets/about/hugs.jpg"
              alt="Уютная комната пансионата"
              class="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div
            class="absolute -bottom-8 -right-6 hidden overflow-hidden rounded-2xl shadow-lift lg:block"
            style="width: 160px; height: 160px;"
          >
            <img
              src="../assets/about/heart.jpg"
              alt="Прогулка на свежем воздухе"
              class="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <!-- Badge: sapphire-700 → sapphire-800 gradient (was brand-700→brand-600 gold) -->
          <div
            class="absolute -bottom-8 left-4 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lift lg:-left-6"
            style="background: linear-gradient(135deg, var(--color-sapphire-700), var(--color-sapphire-800));"
          >
            <div class="relative">
              <img
                src="../assets/logo.png"
                alt="Логотип Доброе сердце"
                class="h-11 w-11 rounded-full bg-white p-1 ring-1 ring-white/30"
              />
            </div>
            <div>
              <div class="font-display text-lg font-600 leading-none text-white">Доброе сердце</div>
              <div class="mt-0.5 font-body text-xs font-400 text-white/65">{{ ui.badgeSubtitle }}</div>
            </div>
          </div>

          <div
            class="glass absolute left-6 top-8 rounded-xl px-4 py-3 shadow-card lg:-left-8"
          >
            <!-- Stat value: gold brand-500 (warm accent on light glass) -->
            <div
              class="font-display text-3xl font-700 leading-none"
              style="color: var(--color-sapphire-500);"
            >
              10+
            </div>
            <div class="mt-0.5 font-body text-xs font-500 uppercase tracking-wider text-sapphire-500">
              {{ ui.yearsLabel }}
            </div>
          </div>
        </div> 

        <div data-animate class="delay-200 lg:pl-4">
          <div class="eyebrow mb-5">{{ ui.eyebrow }}</div>

          <h2 class="section-title mb-6 text-balance">
            <span class="text-sapphire-800">{{ ui.titleBlue }}<br></span>
            <span class="text-brand-500">{{ ui.titleGold }}</span>
          </h2>

          <div class="gold-divider mb-8" />

          <p class="section-subtitle mb-8 leading-prose">
            {{ ui.intro }}
          </p>

          <ul class="mb-10 space-y-5">
            <li
              v-for="(mission, i) in ui.missions"
              :key="i"
              class="flex items-start gap-4 group"
            >
              <div
                class="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                style="background: linear-gradient(135deg, var(--color-brand-100), var(--color-brand-50));"
              >
                <img
                  :src="logoBlue"
                  alt="icon"
                  class="h-4.5 w-4.5 object-contain"
                />
              </div>
              <span class="font-body text-base leading-relaxed text-ink-700">{{ mission }}</span>
            </li>
          </ul>

          <p class="mb-10 font-body text-sm leading-loose text-ink-500">
            {{ ui.outro }}
          </p>

          <div class="flex flex-wrap items-center gap-4">
            <a href="tel:+380961462910" class="btn-primary">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              {{ ui.ctaCall }}
            </a>
            <a
              href="#services"
              class="btn-outline"
              @click.prevent="$el.ownerDocument.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })"
            >
              {{ ui.ctaServices }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>