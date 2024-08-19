/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  output: 'export',
  // Enable build caching
  experimental: {
    turbotrace: {
      logLevel: 'error'
    }
  }
}

module.exports =   {images: {
  domains: ['lilyholloway.co.nz'],
}, nextConfig}