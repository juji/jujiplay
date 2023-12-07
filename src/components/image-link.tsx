'use client'

import styles from './image-link.module.css'

export default function ImageLink({
  id,
  href,
  label,
  full,
  imageSmall,
  imageMedium,
  imageLarge
}:{
  id: string
  href: string
  label: string
  full?: boolean
  imageSmall: string
  imageMedium: string
  imageLarge: string
}){

  return <a
    id={id}
    target="_blank"
    rel="noopener noreferer"
    className={`${styles.link} ${full?styles.full:''}`} href={href} aria-label={label}>
    <span className={styles.title}>{label}</span>
    <picture>
      <source media="(max-width: 600px)" srcSet={imageSmall} />
      <source media="(min-width: 601px)" srcSet={imageMedium} />
      <source media="(min-width: 3600px)" srcSet={imageLarge} />
      <img className={styles.image} src={imageMedium} alt={label}  />
    </picture>
  </a>

}