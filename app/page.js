import ContactForm from '@/components/ContactForm'
import DarkModeToggle from '@/components/DarkModeToggle'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='max-w-3xl p-4 mx-auto h-screen'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold'>Skontaktuj się z nami</h1>
          <p>Proszę wypełnić poniższy formularz</p>
        </div>
        <DarkModeToggle />
      </div>

      <ContactForm />
    </div>
  )
}
