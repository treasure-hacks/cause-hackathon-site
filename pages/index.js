
import { Inter } from 'next/font/google';
import {Header} from '../components/Header';
import {GoalSection} from '../components/GoalSection';
import {HeroSection} from '../components/HeroSection';
import {StudentSection} from '../components/StudentSection';
import {AboutSection} from '../components/AboutSection';
import {OrganizationSection} from '../components/OrganizationSection';
import {ScheduleSection} from '../components/ScheduleSection';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="bg-[hsla(36,76%,91%,36%)] bg-[url('/heroBackgroundCropped.webp')] bg-cover bg-no-repeat  ">
        <Header/>
        <HeroSection/>
       
      </div>
      <div className="bg-[hsla(35,83%,93%,100%)] ">
        <AboutSection/>
        <StudentSection/>
        <OrganizationSection/>
        <GoalSection/>
        <ScheduleSection/>
        
      </div>

    </main>
  )
}
