import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mahmoud Masih Tehrani - Principal Blockchain & Go Developer',
    template: '%s | Mahmoud Masih Tehrani'
  },
  description: 'Principal Software Engineer specializing in Blockchain, FinTech, and Go development. 12+ years of experience in scalable microservice systems and distributed engineering teams.',
  keywords: [
    'Mahmoud Tehrani',
    'Blockchain Developer',
    'Go Developer',
    'Principal Software Engineer',
    'FinTech',
    'Microservices',
    'Distributed Systems',
    'Technical Leadership',
    'Golang',
    'Solidity',
    'Cryptocurrency',
    'IoT',
    'GIS'
  ],
  authors: [{ name: 'Mahmoud Masih Tehrani' }],
  creator: 'Mahmoud Masih Tehrani',
  publisher: 'Mahmoud Masih Tehrani',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://masihtehrani.ir'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://masihtehrani.ir',
    title: 'Mahmoud Masih Tehrani - Principal Blockchain & Go Developer',
    description: 'Principal Software Engineer specializing in Blockchain, FinTech, and Go development. 12+ years of experience in scalable microservice systems and distributed engineering teams.',
    siteName: 'Mahmoud Masih Tehrani',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mahmoud Masih Tehrani - Principal Blockchain & Go Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahmoud Masih Tehrani - Principal Blockchain & Go Developer',
    description: 'Principal Software Engineer specializing in Blockchain, FinTech, and Go development. 12+ years of experience in scalable microservice systems and distributed engineering teams.',
    images: ['/og-image.jpg'],
    creator: '@masihtehrani',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}