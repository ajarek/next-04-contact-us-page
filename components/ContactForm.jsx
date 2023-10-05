'use client'

import React, { useState } from 'react'

const ContactForm = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setToast(false)
    setError(null) //Usuwa poprzednie błędy, gdy rozpocznie się nowe żądanie

    const fullName = e.target[0].value
    const email = e.target[1].value
    const message = e.target[2].value

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      })
      if (!res.ok) {
        throw new Error(
          'Nie udało się przesłać danych. Proszę spróbuj ponownie.'
        )
      }
      console.log(res)
      e.target.reset()
    } catch (err) {
      setError(err.message)
      console.log(err)
    } finally {
      setIsLoading(false)
      setToast(true)
      setTimeout(() => {
        setToast(false);
      }, 3000);
     
    }
  }
  
  return (
    <>
      {error && (<div className="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>{error}</span>
</div>)}
      {toast && !error && (
      <div className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span> Wiadomość wysłano poprawnie!</span>
</div>
      )}
      <form
        className='py-4 mt-4 border-t flex flex-col gap-5'
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor='name'>Imie i Nazwisko</label>
          <input
            type='text'
            placeholder='Jan Nowak'
            required
            className='input input-bordered input-primary w-full text-black '
            autoFocus
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='jan@wp.pl'
            required
            className='input input-bordered input-primary w-full text-black '

          />
        </div>
        <div>
          <label htmlFor='message'>Twoja Wiadomość</label>
          <textarea
            id='message'
            className='h-32 textarea textarea-primary textarea-bordered text-black'
            placeholder='Tutaj wpisz swoją wiadomość...'
            required
          ></textarea>
        </div>
        <div>
          <button
            type='submit'
            className= 'btn btn-primary btn-block'
             disabled={isLoading}
          >
            {isLoading ? 'Ładowanie...' : 'Wyślij'}
          </button>
        </div>
      </form>
    </>
  )
}

export default ContactForm
