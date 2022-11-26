import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextshop</title>
        <meta name="description" content="Nextjsshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.headercontainer}>
        <img className={styles.img} src="" alt="" />
        <h1 className={styles.shopname}>Shopname</h1>
        <div className={styles.basket}></div>
      </header>
      <section>
      </section>
      <footer>

      </footer>
      </div>
  )
}
