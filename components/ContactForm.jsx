'use client'

import React, { useState } from 'react'

const ContactForm = () => {
  const [error, setError] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fullName = e.target[0].value
    const email = e.target[1].value
    const message = e.target[2].value
   

    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      })

      e.target.reset()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form
        className='py-4 mt-4 border-t flex flex-col gap-5'
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor='name'>Imie i Nazwisko</label>
          <input
            type='text'
            placeholder='Jan Nowak'
            id='name'
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='jan@wp.pl'
            id='email'
            required
          />
        </div>
        <div>
          <label htmlFor='message'>Twoja Wiadomość</label>
          <textarea
            name=''
            id='message'
            className='h-32'
            placeholder='Tutaj wpisz swoją wiadomość...'
            required
          ></textarea>
        </div>
        <div>
          <button className='bg-green-700 p-3 text-white font-bold'>
            Wyślij
          </button>
        </div>
      </form>
      <div className='bg-slate-100 flex flex-col'>
        <div className='text-red-600 px-5 py-2'>Error message</div>
      </div>
    </>
  )
}

export default ContactForm
