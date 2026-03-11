<script setup lang="ts">
const documents = [
  'Ксерокопії паспортів (родича, що укладає договір, та майбутнього постояльця)',
  'Письмова згода від майбутнього постояльця на розміщення',
  'Загальний аналіз крові',
  'Біохімічний аналіз крові',
  'Аналізи крові на гепатит B та C',
  'Тест на COVID-19',
  'Флюорографія',
  'Медична карта з наявними довідками та висновками лікарів',
  'Довідка від психіатра (за необхідністю)',
]
</script>

<template>
  <section id="documents" class="relative overflow-hidden py-28 lg:py-36" style="background: var(--color-ivory-100);">
    <!-- Decorative background -->
    <div
      class="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full opacity-50"
      style="background: radial-gradient(circle, var(--color-brand-50) 0%, transparent 70%);"
    />
    <!-- Gold top line -->
    <div class="absolute left-0 right-0 top-0 h-px" style="background: linear-gradient(90deg, transparent, var(--color-ivory-300), transparent);" />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid items-start gap-16 lg:grid-cols-2 xl:gap-24">

        <!-- ── Left: Content & lab service ── -->
        <div data-animate>
          <div class="eyebrow mb-5">Документи</div>
          <h2 class="section-title mb-6">
            Необхідні<br />
            <em class="font-display italic font-400" style="color: var(--color-brand-600);">документи для вступу</em>
          </h2>
          <div class="gold-divider mb-8" />
          <p class="section-subtitle mb-10 leading-prose">
            Для того, щоб вступити до пансіонату, необхідно підготувати
            наступний перелік документів. Якщо у вас виникнуть питання —
            зателефонуйте нам, і ми допоможемо з усіма нюансами.
          </p>

          <!-- Lab service card -->
          <div
            class="relative overflow-hidden rounded-3xl p-7"
            style="background: linear-gradient(135deg, var(--color-brand-600) 0%, var(--color-brand-800) 100%);"
          >
            <!-- Logo watermark -->
            <img
              src="https://dobroe-serdce.com.ua/wp-content/uploads/2019/07/favicon-512-02.png"
              alt=""
              class="absolute right-5 top-5 h-16 w-16 rounded-full opacity-10"
            />

            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                </svg>
              </div>
              <h3 class="font-display text-xl font-600 text-white">Послуга виїзної лабораторії</h3>
            </div>
            <p class="font-body text-sm leading-relaxed text-white/78">
              У нас функціонує послуга виїзної лабораторії для тих пацієнтів,
              які не можуть здати аналізи самостійно. Медичні працівники
              приїдуть за вказаною адресою та проведуть забір крові.
              Результат можна отримати, не відвідуючи лабораторію.
            </p>
          </div>
        </div>

        <!-- ── Right: Documents list ── -->
        <div data-animate class="delay-200">
          <div
            class="rounded-3xl bg-white p-8 shadow-card border border-ivory-200"
          >
            <!-- Card header -->
            <div class="mb-7 flex items-center gap-3 border-b border-ivory-200 pb-6">
              <img
                src="../assets/logo.png"
                alt="Добре серце"
                class="h-10 w-10 rounded-full ring-1 ring-brand-100"
              />
              <div>
                <h3 class="font-display text-2xl font-600 text-ink-900">Перелік документів</h3>
                <p class="font-body text-xs text-ink-400">{{ documents.length }} позицій</p>
              </div>
            </div>

            <ol class="space-y-4">
              <li
                v-for="(doc, index) in documents"
                :key="doc"
                class="group flex items-start gap-4 transition-colors duration-200 hover:bg-brand-50 -mx-3 px-3 py-2 rounded-xl"
              >
                <span
                  class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-body text-xs font-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white"
                  style="background: var(--color-brand-100); color: var(--color-brand-700);"
                >
                  {{ index + 1 }}
                </span>
                <span class="font-body text-sm leading-relaxed text-ink-700">{{ doc }}</span>
              </li>
            </ol>

            <a href="tel:+380961462910" class="btn-primary mt-8 w-full justify-center">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Уточнити перелік документів
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>