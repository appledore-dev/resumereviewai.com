import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Resume Review AI Free',
  description: 'Find the best resume review AI online tool for free. Compare automix.ai vs Resume Worded vs everything.',
  authors: { name: 'M Gilang Januar', url: 'https://resumereviewai.com' },
  keywords: 'blog, automix, automix.ai, product roadmap, career advice, professional life, technology, business',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resumereviewai.com',
    title: 'Resume Review AI Free',
    description: 'Find the best resume review AI online tool for free. Compare automix.ai vs Resume Worded vs everything.',
    images: 'https://resumereviewai.com/og.png?v=2',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@automix_ai',
    creator: '@mgilangjanuar',
    title: 'Resume Review AI Free',
    description: 'Find the best resume review AI online tool for free. Compare automix.ai vs Resume Worded vs everything.',
    images: 'https://resumereviewai.com/og.png?v=2'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
