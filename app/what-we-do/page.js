import Image from 'next/image'
import ServicesPage from '@/components/What-we-do/SubHeader'
import SectionA from '@/components/What-we-do/SectionA'
import ScrollSection from '@/components/What-we-do/ScrollSection'
import SectionB from '@/components/What-we-do/SectionB'



export default function Home() {
  return (
    <div>
        <ServicesPage />
        <SectionA />
        <ScrollSection />
        <SectionB />
        
    </div>
  )
}