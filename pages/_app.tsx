import { useEffect } from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('routeChangeComplete', handleRouteChange)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('routeChangeComplete', handleRouteChange)
      }
    }
  }, [])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp