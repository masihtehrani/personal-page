import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/personal-page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-page' : '',
  experimental: {
    esmExternals: false,
  },
}

export default nextConfig