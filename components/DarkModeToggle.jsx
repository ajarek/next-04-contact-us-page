'use client'

import { ThemeContext } from '@/context/ThemaContext'
import React, { useContext } from 'react'

const DarkModeToggle = () => {
  const { setMode, mode } = useContext(ThemeContext)

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
  return (
    <div
      className='flex items-center border  border-blue-700 rounded-xl relative'
      onClick={toggle}
    >
      <div className=''>🌙</div>
      <div className=''>🔆</div>
      <div
        className='bg-blue-700 w-5 h-5 rounded-full absolute cursor-pointer'
        style={mode === 'dark' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  )
}

export default DarkModeToggle
