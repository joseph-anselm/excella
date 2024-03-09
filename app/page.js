import Image from 'next/image'
import Header from '@/components/Header'
import Section from '@/components/SectionA'
import SectionB from '@/components/SectionB'
import SectionC from '@/components/SectionC'

export default function Home() {
  return (
    <div>
<Header />
        <Section/>
        <SectionB/>
        <SectionC/>
    </div>
  )
}
