import { AuthContextProvider } from '@/context/AuthContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SearchProvider } from '@/context/SearchContext'
import { ModalProvider } from '@/context/ModalContext'
import { TransactionProvider } from '@/context/TransactionContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finantial App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <TransactionProvider>
            <SearchProvider>
              <ModalProvider>{children}</ModalProvider>
            </SearchProvider>
          </TransactionProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}