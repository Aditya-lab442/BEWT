"use client"
import React, { useEffect, useState } from 'react'

const page = () => {

    const [data, setData] = useState([])
    const fetchStudent = async () => {
        const res = await fetch('/api/student')
        const temp = await res.json()
        setData(temp)
    }
    useEffect(() => {
        fetchStudent()
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <div className="col">NAME</div>
                <div className="col">ROLL</div>
                <div className="col">SEM</div>
                {data.map((d, i) => {
                    return (
                        <div key={i}>
                            <div className="row">
                                <div className="col">{d.name}</div>
                                <div className="col">{d.rollno}</div>
                                <div className="col">{d.sem}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default page