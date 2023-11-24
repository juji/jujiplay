'use client'

import styles from './image-link.module.css'

export default function ImageLink({
  id,
  href,
  label,
  imageSmall,
  imageMedium,
  imageLarge
}:{
  id: string
  href: string
  label: string
  imageSmall: string
  imageMedium: string
  imageLarge: string
}){

  return <a
    id={id}
    target="_blank"
    rel="noopener noreferer"
    className={styles.link} href={href} aria-label={label}>
    <picture>
      <source media="(max-width: 600px)" srcSet={imageSmall} />
      <source media="(min-width: 601px)" srcSet={imageMedium} />
      <source media="(min-width: 3600px)" srcSet={imageLarge} />
      <img className={styles.image} src={imageMedium} alt={label}  />
    </picture>
  </a>

}