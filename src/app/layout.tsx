import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mahmoud Masih Tehrani - Principal Software Engineer | Blockchain & FinTech Expert',
  description: 'Principal Software Engineer with 12+ years of experience in blockchain technology, smart contract development, and distributed systems. Expert in Go, Solidity, and technical leadership.',
  keywords: [
    'Mahmoud Masih Tehrani',
    'Principal Software Engineer',
    'Blockchain Developer',
    'Go Developer',
    'FinTech Expert',
    'Smart Contract Developer',
    'Distributed Systems',
    'Technical Leadership',
    'Golang Expert',
    'Solidity Developer',
    'DeFi Developer',
    'Software Architecture',
    'Microservices',
    'Backend Development',
    'Iran Developer',
    'Remote Developer'
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
    title: 'Mahmoud Masih Tehrani - Principal Software Engineer | Blockchain & FinTech Expert',
    description: 'Principal Software Engineer with 12+ years of experience in blockchain technology, smart contract development, and distributed systems. Expert in Go, Solidity, and technical leadership.',
    siteName: 'Mahmoud Masih Tehrani',
  },
  twitter: {
    card: 'summary',
    title: 'Mahmoud Masih Tehrani - Principal Software Engineer | Blockchain & FinTech Expert',
    description: 'Principal Software Engineer with 12+ years of experience in blockchain technology, smart contract development, and distributed systems. Expert in Go, Solidity, and technical leadership.',
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