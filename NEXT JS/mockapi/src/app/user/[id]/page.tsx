import React from 'react'

async function Page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params

  const res = await fetch(`https://68c107490b196b9ce1c5aa71.mockapi.io/faculty/${id}`)
  const data = await res.json()

  return (

    <div className="m-5">
        <h1 className="mb-3">ID: {data.id}</h1>
        <h1 className="mb-3">Name: {data.name}</h1>
        <h1 className="mb-3">City: {data.city}</h1>
        
        <div className="mt-4">
            <img src={data.img} width="150" height="150" alt={data.name} />
        </div>
    </div>
  )
}

export default Page