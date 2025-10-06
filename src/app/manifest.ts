import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mahmoud Masih Tehrani - Principal Blockchain & Go Developer',
    short_name: 'Mahmoud Tehrani',
    description: 'Principal Software Engineer specializing in Blockchain, FinTech, and Go development. 12+ years of experience in scalable microservice systems and distributed engineering teams.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
