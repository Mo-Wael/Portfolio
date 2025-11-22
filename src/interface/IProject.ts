export interface Project {
  id: string
  name: string
  description: string[]
  features: string[]
  tags: string[]
  image: string
  links: {
    github?: string
    demo?: string
  }
}