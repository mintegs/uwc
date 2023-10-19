import Navbar from '@/components/layout/navbar'
import AboutMe from '@/components/pages/home/aboutMe'
import InfoMe from '@/components/pages/home/infoMe'

export default function Home() {
  return (
    <div>
      <Navbar />
      <InfoMe />
      <AboutMe />
    </div>
  )
}
