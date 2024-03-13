import Image from 'next/image'
import ContactUs from '@/components/Contact-us/Contact-us'
import ContactUsHeader from '@/components/Contact-us/SubHeader'


export default function Home() {
  return (
    <div>
        <ContactUsHeader />
        <ContactUs />
       
        
    </div>
  )
}