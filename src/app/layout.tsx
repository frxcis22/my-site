import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import GoogleAnalytics from '../components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Francis Fallah Bockarie | Cybersecurity & Risk Analysis',
  description: 'Cybersecurity professional specializing in risk analysis, vendor management, and IT infrastructure.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className + ' bg-primary text-text-primary'}>
        <GoogleAnalytics />
        <main className="min-h-screen bg-primary text-text-primary">
          {children}
        </main>
      </body>
    </html>
  )
} 