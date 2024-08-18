import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css" />
        <title>Lily Holloway</title>
      </Head>
      <body className="lh-copy dark-gray pa0 f6 georgia bg-super-white">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </body>
    </>
  )
}

export default MyApp