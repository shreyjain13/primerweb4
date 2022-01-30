import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Link from "next/link";

const SignLegacy = dynamic(() =>
  import('legacy-xyz').then((legacy) => legacy.SignLegacy),
  { ssr: false }
) // Async API cannot be server-side rendered

const SignersList = dynamic(() =>
  import('legacy-xyz').then((legacy) => legacy.SignersList),
  { ssr: false }
) // Async API cannot be server-side rendered

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Primer</title>
        <meta name="description" content="Generated by Shrey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Primer
        </h1>
        <p>Surveying the new Web3 git alandscape.</p>

        <h1 className="title">
          {' '}
          <Link href="/posts/nft">
            <a>NFT</a>
          </Link>
        </h1>
      <center>
      <SignLegacy projectId={'toronto'}
            message={'Thank you for reading our content. Sign this list to show endorsement.'}
            buttonStyle={
              {
                border: "4px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                height: "60px",
                backgroundColor: "#2a5c99",
                textTransform: 'none',
                fontSize: 20,
                ':hover': { background: '#2a5c99', opacity: 0.8 }
              }
            }
            showLegacy={false}
          />
      <SignersList projectId={'toronto'} />
      </center>



        
      </main>



      <footer className={styles.footer}>
        <p>Shrey Jain</p>
      </footer>
    </div>
  )
}
