import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mitchell Marino | Business Analyst &amp; Full Stack Developer</title>
        <meta name="description" content="Mitchell Marino — Business Analyst and Full Stack Developer based in Los Angeles." />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
