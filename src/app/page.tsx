import Image from 'next/image'
import styles from './page.module.css'

import Projects from '@/components/projects'



export default function Home() {
  return (
    <div className={`container ${styles.container}`}>
      <main className={styles.main}>

        <a className={styles.logo} href="/">
          <Image 
            className={styles.logoImage}
            src="/jujiplay.svg" 
            alt="jujiplay" 
            width={200}
            height={72}
          />
        </a>

        <h1 className={styles.h1}>It's play time!!</h1>
        <p className={styles.p}>Checkout my playtime projects</p>

        <Projects />

      </main>
      <footer className={styles.footer}>
        <div className={styles.content}>
          Made by <a href="https://jujiyangasli.com">juji</a>
        </div>
      </footer>
    </div>
  )
}
