import styles from './projects.module.css'

import ImageLink from './image-link'

const projects = [
  {
    id: 'boids',
    href: 'https://boids.jujiplay.com',
    label: 'Boids',
    full: true,
    imageSmall: '/boids-600.webp',
    imageMedium: '/boids.webp',
    imageLarge: '/boids.png',
  },
  {
    id: 'wallpaper',
    href: 'https://wallpaper.jujiplay.com',
    label: 'Wallpaper',
    imageSmall: '/clifford-dejong-600.webp',
    imageMedium: '/clifford-dejong.webp',
    imageLarge: '/clifford-dejong.png',
  },
  {
    id: 'circular',
    href: 'https://circular.jujiplay.com',
    label: 'Circular Orbit',
    imageSmall: '/circular-600.webp',
    imageMedium: '/circular.webp',
    imageLarge: '/circular.png',
  },
  {
    id: 'attractors',
    href: 'https://attractors.jujiplay.com',
    label: 'Attractors',
    imageSmall: '/attractor-600.webp',
    imageMedium: '/attractor.webp',
    imageLarge: '/attractor.png',
  },
  {
    id: 'ball',
    href: 'https://ball.jujiplay.com',
    label: 'The Ball',
    imageSmall: '/ball-600.webp',
    imageMedium: '/ball.webp',
    imageLarge: '/ball.png',
  },
]

export default function Projects(){

  return <div className={styles.projects}>
    {projects.map(project => <ImageLink key={project.id} {...project} />)}
  </div> 

}