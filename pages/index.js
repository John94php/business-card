import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wizytówka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wizytówka
        </h1>

        <p className={styles.description}>
Pierwszy przykład        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3> <i class="fas fa-info-circle"></i> O nas &rarr;</h3>
            <p>Kilka słów o naszej firmie</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h3><i class="fas fa-address-card"></i> Kontakt &rarr;</h3>
            <p>Formularz kontaktowy</p>
          </a>

          <a
            href="/products"
            className={styles.card}
          >
            <h3><i class="fas fa-th-list"></i> Nasza oferta &rarr;</h3>
            <p>Sprawdź co mamy do zaoferowania</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Social media &rarr;</h3>
            <p>

                <ul>
                    <li><i class="fab fa-facebook"></i>&nbsp;Facebook</li>
                    <li> <i class="fab fa-twitter"></i>&nbsp;Twitter</li>
                    <li><i class="fab fa-youtube"></i>&nbsp;Youtube</li>
                </ul>
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
          <p className={styles.card}>Created by Jan Zalesiński <a href="https://github.com/John94php" target="_blank"><i
              className="fab fa-github"></i>&nbsp; Github</a></p>

      </footer>
    </div>
  )
}
