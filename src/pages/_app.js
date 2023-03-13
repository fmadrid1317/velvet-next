import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps, title="Velvet by Luis"}) {
  return(
    <>
      <Head>
          <title>{title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
