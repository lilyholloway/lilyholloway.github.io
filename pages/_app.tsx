import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css" />
        <title>Lily Holloway</title>
        <link rel="icon" href="/images/favicon.ico" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <DefaultSeo
        title="Lily Holloway"
        description="Lily Holloway is a powerlifting enthusiast and third-year MFA candidate in the creative writing programme at Syracuse University."
        openGraph={{
          type: 'website',
          locale: 'en_NZ',
          url: 'https://lilyholloway.co.nz/',
          site_name: 'Lily Holloway',
          images: [
            {
              url: 'https://lilyholloway.co.nz/images/Lily Holloway.jpg',
              width: 300,
              height: 300,
              alt: 'Lily Holloway',
            },
          ],
        }}
        twitter={{
          handle: '@milfs4minecraft',
          site: '@milfs4minecraft',
          cardType: 'summary_large_image',
        }}
      />
      <body className="lh-copy dark-gray pa0 f6 georgia bg-super-white">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </body>
    </>
  )
}

export default MyApp