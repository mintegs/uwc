import type { Metadata } from 'next'
import { Baloo_Bhaijaan_2 } from 'next/font/google'
import './globals.css'

const BalooBhaijaan2 = Baloo_Bhaijaan_2({
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  subsets: ['arabic'],
})

export const metadata: Metadata = {
  title: 'مینتگس',
  description: 'وبسایت آموزش برنامه نویسی',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fa'>
      <body className={BalooBhaijaan2.className}>
        <main className='relative min-h-screen flex-col items-center justify-between p-24'>
          <div className='fixed z-[-1] inset-x-0 m-auto h-80 max-w-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-[120px]'></div>

          {children}
        </main>
      </body>
    </html>
  )
}
