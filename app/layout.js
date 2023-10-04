import { ThemeProvider } from '@/context/ThemaContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Strona kontaktowa',
  description: 'Strona kontaktowa z bazą danych mongodb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
      <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
