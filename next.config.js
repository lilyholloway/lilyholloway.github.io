/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports =   {images: {
  domains: ['lilyholloway.co.nz'],
}, nextConfig}