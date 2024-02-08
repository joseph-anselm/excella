import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Head from 'next/head';
import Section from '@/components/SectionA';
import SectionB from '@/components/SectionB';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Excella Energy',
  description: 'Excella Energy Services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Your Next.js App</title>
        <meta name="Excella Energy Services" content="Excellence, Quality, Competence" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar/>
        <Header />
        <Section/>
        <SectionB/>
        {children}
      </body>
    </html>
  )
}
