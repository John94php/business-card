import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const name = "Buisness Inc."
const date = "2000"
const founder = "Jan Kowalski"
export default function About() {
    return (

        <div className={styles.container}>
            <Head>
                <title>O nas</title>
            </Head>
            <Link href={'/'}>
                <a>Powrót do strony głównej</a>
            </Link>
            <p className={styles.description}>Nasza firma {name} powstała w roku {date}.<br/>
                Założycielem był {founder},który od początku istnienia firmy zajmuje stanowisko Głównego Dyrektora
            </p>
        </div>
    )

}
