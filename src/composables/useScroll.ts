import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observer = ref<IntersectionObserver | null>(null)

  const observeElements = (selector: string = '[data-animate]') => {
    const elements = document.querySelectorAll<HTMLElement>(selector)

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.classList.add('animate-fade-up')
            el.style.opacity = '1'
            observer.value?.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    elements.forEach((el) => {
      el.style.opacity = '0'
      observer.value?.observe(el)
    })
  }

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return { observeElements }
}

export function useActiveSection() {
  const activeSection = ref<string>('')

  const handleScroll = () => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const scrollY = window.scrollY + 100

    sections.forEach((section) => {
      const top = section.offsetTop
      const height = section.offsetHeight
      if (scrollY >= top && scrollY < top + height) {
        activeSection.value = section.id
      }
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { activeSection }
}

export function useScrolled(threshold = 80) {
  const isScrolled = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > threshold
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { isScrolled }
}