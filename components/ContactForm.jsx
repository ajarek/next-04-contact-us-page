import React from 'react'

const ContactForm = () => {
  return (
    <>
      <form action='' className='py-4 mt-4 border-t flex flex-col gap-5'>
        <div>
          <label htmlFor='name'>Imie i Nazwisko</label>
          <input
            type='text'
            placeholder='Jan Nowak'
            id='name'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='jan@wp.pl'
            id='email'
          />
        </div>
        <div>
          <label htmlFor='message'>Twoja Wiadomość</label>
          <textarea
            name=''
            id='message'
            className='h-32'
            placeholder='Tutaj wpisz swoją wiadomość...'
          ></textarea>
        </div>
        <div>
          <button className='bg-green-700 p-3 text-white font-bold'>Wyślij</button>
        </div>
      </form>
     <div className='bg-slate-100 flex flex-col'>
     <div className='text-red-600 px-5 py-2'>Error message</div>
     </div>
    </>
  )
}

export default ContactForm
