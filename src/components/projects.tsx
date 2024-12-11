import styles from './projects.module.css'

import ImageLink from './image-link'

const projects = [
  {
    id: 'bokeh',
    href: 'https://grainy-bokeh.jujiplay.com/',
    label: 'Grainy Bokeh',
    imageSmall: '/bokeh-600.webp',
    imageMedium: '/bokeh.webp',
    imageLarge: '/bokeh.png',
  },
  {
    id: 'boids',
    href: 'https://boids.jujiplay.com',
    label: 'Boids',
    imageSmall: '/boids-600.webp',
    imageMedium: '/boids.webp',
    imageLarge: '/boids.png',
  },
  {
    id: 'clifford-dejong',
    href: 'https://wallpaper.jujiplay.com',
    label: 'Clifford-Dejong',
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
    {projects.map((project,i) => (
      <ImageLink 
        key={project.id} 
        full={!i && !!(projects.length%2)} 
        {...project} 
      />
    ))}
  </div> 

}