'use client'

import React, { useState } from 'react'

const ContactForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

 const handleSubmit=(e)=>{
  e.preventDefault()
  console.log('nazwisko',fullName);
  console.log('email',email);
  console.log('wiadomość',message);
 }

  return (
    <>
      <form
        action=''
        className='py-4 mt-4 border-t flex flex-col gap-5'
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor='name'>Imie i Nazwisko</label>
          <input
            type='text'
            onChange={(e)=>setFullName(e.target.value)}
            value={fullName}
            placeholder='Jan Nowak'
            id='name'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            placeholder='jan@wp.pl'
            id='email'
          />
        </div>
        <div>
          <label htmlFor='message'>Twoja Wiadomość</label>
          <textarea
            name=''
            id='message'
            onChange={(e)=>setMessage(e.target.value)}
            value={message}
            className='h-32'
            placeholder='Tutaj wpisz swoją wiadomość...'
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
