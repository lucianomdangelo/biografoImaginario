import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import Navbar from '../navbar'

export default function AppLayout ({children}) {
    return (
        <div className={styles.container}>
        <Head>
          <title>titulo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar/>  
        <main className={styles.main}>
            {children}
        </main>
  
        <footer className={styles.footer}>
        </footer>
      </div>
    )
};