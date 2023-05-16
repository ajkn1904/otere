import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import Header from '@/Components/Header'
import ApplyToDrive from '@/Components/ApplyToDrive'
import TereWorks from '@/Components/TereWorks'
import Benefits from '@/Components/Benefits'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen font-serif ${inter.className} max-w-[1440px] mx-auto`}
    >

      <Navbar />

      <div className='bg-gray-100'>

        <Header />
        <ApplyToDrive />
        <TereWorks />
        <Benefits/>
      </div>


    </main>
  )
}
