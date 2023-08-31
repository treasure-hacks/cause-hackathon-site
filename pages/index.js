
import { Inter } from 'next/font/google';
import {Header} from '../components/Header';
import {GoalSection} from '../components/GoalSection';
import {HeroSection} from '../components/HeroSection';
import {StudentSection} from '../components/StudentSection';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="bg-[hsl(196,31%,14%)]">
        <Header/>
        <HeroSection/>
      </div>
      <div className="bg-gradient-to-b from-[hsl(196,31%,14%)] to-[hsl(0,0%,0%)]">
        <GoalSection/>
        <StudentSection/>
      </div>

    </main>
  )
}
