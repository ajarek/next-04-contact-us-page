'use client'

import Link from 'next/link'
import DarkModeToggle from '../components/DarkModeToggle'

const Navbar = () => {
  return (
    <div className='max-w-3xl  mx-auto  flex justify-between items-center px-4 h-16 '>
      <Link
        href='/'
        className='link link-hover link-primary'
      >
        <h1 className='text-xl font-normal'>Formularz Kontaktowy</h1>
      </Link>
      <div className='flex items-center text-center gap-8'>
        <Link
          href='/list'
          className='link link-hover link-primary'
        >
          <h1 className='text-xl font-normal'>Lista Kontaktów</h1>
        </Link>

        <DarkModeToggle />
      </div>
    </div>
  )
}

export default Navbar
