import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen overflow-hidden font-serif ${inter.className} max-w-[1440px] mx-auto`}
    >

      <Navbar />

    </main>
  )
}
