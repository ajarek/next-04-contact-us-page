'use client'

import React, { useState } from 'react'

const ContactForm = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)//Usuwa poprzednie błędy, gdy rozpocznie się nowe żądanie

    const fullName = e.target[0].value
    const email = e.target[1].value
    const message = e.target[2].value
    


    try {
     const res= await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      })
      if (!res.ok) {
        throw new Error('Nie udało się przesłać danych. Proszę spróbuj ponownie.')
      }
      console.log(res);
      e.target.reset()
      
    } catch (err) {
      setError(err.message)
      console.log(err)
    }finally {
      setIsLoading(false) 
    }
    
  }

  return (
    <>
      {error && <div style={{ color: 'red' }}>{error}</div>}
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
          <button className='bg-green-700 p-3 text-white font-bold' disabled={isLoading}>
          {isLoading ? 'Ładowanie...' : 'Wyślij'}
          </button>
        </div>
      </form>
      
    </>
  )
}

export default ContactForm
