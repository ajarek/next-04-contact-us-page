import { NextResponse } from 'next/server'
import connect from '@/utils/db'
import Message from '@/models/Message'

export const GET = async (request, { params }) => {
  const { id } = params

  try {
    await connect()

    const message = await Message.findById(id)

    return new NextResponse(JSON.stringify(message), { status: 200 })
  } catch (err) {
    return new NextResponse('Błąd bazy danych', { status: 500 })
  }
}

export const DELETE = async (request, { params }) => {
  const { id } = params

  try {
    await connect()

    await Message.findByIdAndDelete(id)

    return new NextResponse('Wiadomość została usunięta', { status: 200 })
  } catch (err) {
    return new NextResponse('Błąd bazy danych', { status: 500 })
  }
}
