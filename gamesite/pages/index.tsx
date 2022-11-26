import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>EndWithBoredom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.headercontainer}>
        <img className={styles.img} src="" alt="" />
        <h1>EndWithBoredom</h1>
      </header>
      <h2 className={styles.oneplayer}>1-Player Games:</h2>
      <section className={styles.onesectioncontainer}>
        <div className={styles["box"] + " " + styles["wordle"]}></div>
        <div className={styles["box"] + " " + styles["sudoku"]}></div>
        <div className={styles["box"] + " " + styles["flappybird"]}></div>
        <div className={styles["box"] + " " + styles["wordle2"]}></div>
      </section>
        <h2 className={styles.twoplayer}>2-Player Games:</h2>
        <section className={styles.twosectioncontainer}>
        <div className={styles["box"] + " " + styles["wordle"]}></div>
        <div className={styles["box"] + " " + styles["sudoku"]}></div>
        <div className={styles["box"] + " " + styles["flappybird"]}></div>
        <div className={styles["box"] + " " + styles["wordle2"]}></div>
      </section>
      <footer className={styles.footerContainer}>
        <div className={styles.footertext}>
          <Link className={styles["link"] + " " + styles["contact"]}  href="">Contact</Link>
          <Link className={styles["link"] + " " + styles["contact"]}  href="">Donate</Link>
        </div>
      </footer>
    </div>
  )
}
