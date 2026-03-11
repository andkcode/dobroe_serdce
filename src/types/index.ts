export interface NavItem {
  label: string
  href: string
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

export interface AccommodationType {
  id: string
  icon: string
  title: string
  description: string
}

export interface GalleryImage {
  id: number
  src: string
  alt: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  avatar: string
}

export interface ContactInfo {
  icon: string
  label: string
  value: string
  href?: string
}