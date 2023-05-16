import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import Header from '@/Components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen font-serif ${inter.className} max-w-[1440px] mx-auto`}
    >

      <Navbar />

      <Header/>

    </main>
  )
}
