import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/contact/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export async function generateMetadata({ params }) {
  const message = await getData(params.id)

  return {
    title: message.fullName,
    description: message.message,
  }
}

const MessageID = async ({ params }) => {
  const data = await getData(params.id)

  return (
    <div
      className={
        'max-w-3xl p-4 mx-auto h-screen flex flex-col items-center justify-center '
      }
    >
      <h1 className='text-2xl mb-20'>Kontakt nr {data._id}</h1>
      <div className={'px-4'}>
        <h2 className={'text-xl '}>imię i nazwisko: {data.fullName}</h2>
        <p className={'mt-4'}>email: {data.email}</p>
        <p className={'mt-4'}>wiadomość: {data.message}</p>
        <p className={'mt-4'}>data wysłania: {data.createdAt}</p>
      </div>
    </div>
  )
}

export default MessageID
