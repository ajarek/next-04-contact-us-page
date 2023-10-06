'use client'

import React, { useEffect, useState, useContext } from 'react'
import { notFound } from 'next/navigation'
import { ThemeContext } from '@/context/ThemaContext'
import { useRouter, Link } from 'next/navigation'

const page = () => {
  const [data, setData] = useState([])
  const { setMode, mode } = useContext(ThemeContext)
  const router = useRouter()

  useEffect(() => {
    async function getData() {
      const res = await fetch(`/api/contact`, {
        cache: 'no-store',
      })

      if (!res.ok) {
        notFound()
      }
      const data = await res.json()
      setData(data)
    }
    getData()
  }, [])

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
      })

      router?.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='max-w-3xl p-4 mx-auto h-screen'>
      <div className='overflow-x-auto'>
        <table className='table '>
          <thead>
            <tr className={mode === 'dark' ? 'dark' : 'light'}>
              <th>Lp</th>
              <th>Imie Nazwisko</th>
              <th>Email</th>
              <th>Data</th>
              <th>Akcja</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dt, index) => (
              <tr
                key={data._id}
                className=''
              >
                <th>{index + 1}</th>
                <td>{dt.fullName}</td>
                <td>{dt.email}</td>
                <td>{dt.createdAt.slice(0, 10)}</td>
                <td className={'flex justify-between text-xl'}>
                  <span
                    className={'cursor-pointer'}
                    onClick={() => handleDelete(dt._id)}
                  >
                    🗑️
                  </span>
                  <span
                    className={'cursor-pointer'}
                    onClick={() => router.push(`/list/${dt._id}`)}
                  >
                    🖊️
                  </span>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page
