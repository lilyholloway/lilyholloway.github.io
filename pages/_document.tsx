import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <body className="lh-copy dark-gray pa0 f6 georgia bg-super-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument