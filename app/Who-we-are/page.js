import Image from 'next/image'
import AboutUsPage from '@/components/About-us/SubHeader'
import SectionA from '@/components/About-us/SectionA'
import SectionB from '@/components/About-us/SectionB'
import SectionC from '@/components/About-us/SectionC'
import TeamSection from '@/components/About-us/TeamSection'

export default function Home() {
  return (
    <div>
        <AboutUsPage />
        <SectionA />
        <SectionB />
        <SectionC />
        <TeamSection />


        
    </div>
  )
}