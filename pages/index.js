
import { Inter } from 'next/font/google';
import {Header} from '../components/Header';
import {GoalSection} from '../components/GoalSection';
import {HeroSection} from '../components/HeroSection';
import {StudentSection} from '../components/StudentSection';
import {AboutSection} from '../components/AboutSection';
import {OrganizationSection} from '../components/OrganizationSection';
import {ScheduleSection} from '../components/ScheduleSection';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
    <Head>
      <title>Cause Hacks</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
      <link rel="manifest" href="/icons/site.webmanifest"/>
      <link rel="shortcut icon" href="/icons/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#ffc40d"/>
      <meta name="msapplication-config" content="/icons/browserconfig.xml"/>
      <meta name="theme-color" content="#ffffff"/>

      <meta name="description" content="Welcome to Cause Hacks, an unparalleled chance to unite with ambitious students and progressive organizations, creating solutions for pressing social issues!"/>
      <meta property="og:title" content="Cause Hacks"/>
      <meta property="og:site_name" content="Cause hacks"/>
      <meta property="og:url" content="https://cause.treasurehacks.org"/>
      <meta property="og:description" content="Welcome to Cause Hacks, an unparalleled chance to unite with ambitious students and progressive organizations, creating solutions for pressing social issues!"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="/icons/android-chrome-512x512.png"/>
    </Head>
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
  </>);
}
