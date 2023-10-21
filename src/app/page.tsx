import Navbar from '@/components/layout/navbar'
import AboutMe from '@/components/pages/home/aboutMe'
import Articles from '@/components/pages/home/articles'
import InfoMe from '@/components/pages/home/infoMe'
import Tech from '@/components/pages/home/tech'

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
