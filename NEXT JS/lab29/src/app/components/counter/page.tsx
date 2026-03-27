"use client"

import React, { useState } from 'react'

const page = () => {
    const [count,setCount] = useState<number>(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Add Count</button>
        </div>
    )
}

export default page