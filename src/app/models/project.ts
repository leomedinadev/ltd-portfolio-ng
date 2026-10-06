export interface Project {
  title: string,
  description: string,
  github: string,
  technologies: string[],
  // Opcionales: demo desplegada e imagen dentro de public/
  link?: string,
  image?: string,
}
