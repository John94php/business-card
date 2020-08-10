import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Offer() {
    return (
    <div className={styles.container}>
        <Head>
            <title>Nasza oferta</title>
        </Head>
        <Link href={'/'} className={styles.grid}>
            <a>Powrót do strony głównej</a>
        </Link>
    <h3 className={styles.title}>Poznaj naszą ofertę</h3>
        <div className={styles.card}>
            <h1>[NAZWA]</h1>
            <h3>[Poddtytuł]</h3>
            <i>Treść</i>
        </div>
        <div className={styles.card}>
            <h1>[NAZWA]</h1>
            <h3>[Poddtytuł]</h3>
            <i>Treść</i>
        </div>
    </div>
    )
}
