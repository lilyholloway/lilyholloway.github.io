/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['lilyholloway.co.nz'],
  },
  // Enable build caching
  experimental: {
    turbotrace: {
      logLevel: 'error'
    }
  },

}

module.exports = nextConfig