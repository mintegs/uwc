import Navbar from '@/components/layout/navbar'
import dynamic from 'next/dynamic'

const AboutMe = dynamic(() => import('@/components/pages/home/aboutMe'), {
  ssr: false,
})
const Articles = dynamic(() => import('@/components/pages/home/articles'), {
  ssr: false,
})
const InfoMe = dynamic(() => import('@/components/pages/home/infoMe'), {
  ssr: false,
})
const Tech = dynamic(() => import('@/components/pages/home/tech'), {
  ssr: false,
})

export default function Home() {
  return (
    <div>
      <Navbar />
      <InfoMe />
      <AboutMe />
      <Tech />
      <Articles />
    </div>
  )
}
