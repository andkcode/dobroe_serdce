# 🏠 Добре серце — Сайт пансіонату

Офіційний вебсайт приватного пансіонату «Добре серце» для людей похилого віку у Вінниці.

## 🚀 Технологічний стек

- **[Vue 3](https://vuejs.org/)** — Progressive JavaScript framework з Composition API та `<script setup>`
- **[Vite 5](https://vitejs.dev/)** — Блискавичний інструмент збірки
- **[TypeScript](https://www.typescriptlang.org/)** — Типізований JavaScript
- **[Tailwind CSS 3](https://tailwindcss.com/)** — Utility-first CSS framework
- **[ESLint](https://eslint.org/)** — Linter з підтримкою Vue та TypeScript
- **[Prettier](https://prettier.io/)** — Форматування коду з плагіном Tailwind
- **[Vitest](https://vitest.dev/)** — Unit-тестування компонентів

## 📁 Структура проєкту

```
dobre-serdce/
├── src/
│   ├── components/
│   │   ├── __tests__/          # Unit-тести
│   │   ├── AppHeader.vue       # Шапка сайту з мобільним меню
│   │   ├── HeroSection.vue     # Головний банер
│   │   ├── AboutSection.vue    # Про нас
│   │   ├── ServicesSection.vue # Послуги (8 карток)
│   │   ├── AccommodationSection.vue # Варіанти проживання
│   │   ├── GallerySection.vue  # Фотогалерея з лайтбоксом
│   │   ├── DocumentsSection.vue # Документи для вступу
│   │   ├── PriceSection.vue    # Вартість проживання
│   │   ├── ContactsSection.vue # Контакти та форма
│   │   └── AppFooter.vue       # Підвал сайту
│   ├── composables/
│   │   └── useScroll.ts        # Анімації прокрутки, активна секція
│   ├── types/
│   │   └── index.ts            # TypeScript типи
│   ├── App.vue                 # Кореневий компонент
│   ├── main.ts                 # Точка входу
│   └── style.css               # Глобальні стилі + Tailwind
├── index.html                  # HTML шаблон
├── vite.config.ts              # Конфігурація Vite
├── tailwind.config.js          # Конфігурація Tailwind
├── postcss.config.js           # PostCSS
├── tsconfig.json               # TypeScript конфіг
├── .eslintrc.cjs               # ESLint правила
├── .prettierrc                 # Prettier налаштування
└── vitest.config.ts            # Vitest конфігурація
```

## 🛠 Швидкий старт

```bash
# Встановити залежності
npm install

# Запустити сервер розробки
npm run dev

# Збудувати для продакшну
npm run build

# Переглянути збірку
npm run preview

# Запустити тести
npm test

# Лінтинг
npm run lint

# Форматування
npm run format

# Перевірка типів
npm run type-check
```

## ✨ Ключові особливості

- **Повністю україномовний** — весь контент та інтерфейс
- **Responsive design** — адаптивний для всіх розмірів екранів
- **Accessibility** — WCAG 2.1 AA відповідність (aria-labels, семантичний HTML)
- **Performance** — lazy loading зображень, code splitting
- **SEO** — мета-теги, canonical, schema.org розмітка
- **Анімації** — IntersectionObserver для плавного входу елементів
- **Лайтбокс** — перегляд зображень галереї з Teleport
- **Форма контактів** — з валідацією та станом успіху
- **Floating CTA** — кнопка дзвінка на мобільних пристроях

## 🎨 Дизайн-система

Палітра кольорів:
- **Brand (червоний)**: `#C8392B` — основний акцент
- **Warm (бежево-жовтий)**: `#fef9f0` — фон секцій
- **Gray 950**: підвал та темні елементи

Шрифти:
- **Cormorant Garamond** — заголовки (вишуканий серифний)
- **Mulish** — текст (читабельний гротеск)
