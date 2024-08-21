/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['lilyholloway.co.nz'],
  },
}

module.exports = nextConfig