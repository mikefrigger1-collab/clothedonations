import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/clothe-donations-icon.png" />
        <link rel="shortcut icon" href="/clothe-donations-icon.png" />
        <link rel="apple-touch-icon" href="/clothe-donations-icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}