'use client'

import React, { useEffect, useState, useContext } from 'react'
import { notFound } from 'next/navigation'
import { ThemeContext } from '@/context/ThemaContext'


const page = () => {
  const [data, setData] = useState([])
  const { setMode, mode } = useContext(ThemeContext)
  
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
 
  return (
    <div  className='max-w-3xl p-4 mx-auto h-screen'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead >
      <tr  className={mode === 'dark' ? 'dark' : 'light'}>
        <th>Lp</th>
        <th>Imie Nazwisko</th>
        <th>Email</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>
      {data.map((dt,index)=>{
        return(
          <tr key={dt._id} className="">
          <th>{index+1}</th>
          <td>{dt.fullName}</td>
          <td>{dt.email}</td>
          <td>{(dt.createdAt).slice(0,10)}</td>
        </tr>
        )
      })}
     
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default page