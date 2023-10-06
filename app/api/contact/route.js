import { NextResponse } from 'next/server'
import connect from '@/utils/db'
import Message from '@/models/Message'

export const POST = async (request) => {
  const body = await request.json()

  const newMessage = new Message(body)
  console.log(newMessage)
  try {
    await connect()

    await newMessage.save()

    return new NextResponse('Wiadomość została utworzona', { status: 201 })
  } catch (err) {
    return new NextResponse('Błąd bazy danych', { status: 500 })
  }
}

export const GET = async () => {
  try {
    await connect()

    const contacts = await Message.find()

    return new NextResponse(JSON.stringify(contacts), { status: 200 })
  } catch (err) {
    return new NextResponse('Błąd bazy danych', { status: 500 })
  }
}
