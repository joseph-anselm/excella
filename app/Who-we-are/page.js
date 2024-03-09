import Image from 'next/image'
import AboutUsPage from '@/components/About-us/SubHeader'
import SectionA from '@/components/About-us/SectionA'
import SectionB from '@/components/About-us/SectionB'

export default function Home() {
  return (
    <div>
        <AboutUsPage />
        <SectionA />
        <SectionB />

        
    </div>
  )
}