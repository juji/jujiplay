import Image from 'next/image'
import styles from './page.module.css'

import Projects from '@/components/projects'



export default function Home() {
  return (
    <div className={`container ${styles.container}`}>
      <main className={styles.main}>

        <a className={styles.logo} aria-label="play!!" href="/">
          <Image 
            className={styles.logoImage}
            src="/logo.svg" 
            alt="juji" 
            width={157}
            height={72}
          />
          <span className={styles.logoPlay}>
            <Image 
              className={styles.logoPlayImage}
              src="/play.svg" 
              alt="play" 
              width={25}
              height={14}
            />
          </span>
        </a>

        <h1 className={styles.h1}>It&apos;s play time!!</h1>
        <p className={styles.p}>Checkout my playtime projects</p>

        <Projects />

      </main>
      <footer className={styles.footer}>
        <div className={styles.content}>
          Made by <a rel="noopener noreferer" target="_blank" 
            href="https://jujiyangasli.com">juji</a>
        </div>
      </footer>
    </div>
  )
}
