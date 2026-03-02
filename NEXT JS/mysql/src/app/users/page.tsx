"use client"

import React, { useEffect, useState } from 'react'

const page = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState("");
    const fetchUsers = async () => {
        const res = await fetch('/api/users')
        const temp = await res.json()
        setData(temp)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    
    return (
        <div>
            <input type="text" onChange={(e) => { 
                setName(e.target.value) 
                }} />
            <button onClick={async () => {
                const res = await fetch(`/api/users/serch/${name}`)
                const temp = await res.json()
                setData(temp)
                fetchUsers()
            }}>Submit</button>
            {data.map((d) => {
                return (
                    <>
                        <h1>{d.MovieID}</h1>
                        <h1>{d.MovieName}</h1>
                    </>
                )
            })}

        </div>
    )
}

export default page