"use client"
import { useState } from "react"


const page = () => {

    const [num1,setNum1] = useState("")
    const [num2,setNum2] = useState("")
    const [res,setRes] = useState(0)
    return (
        <div>
            <input type="text" name="num1" value={num1} onChange={(e)=>{setNum1(e.target.value)}}/>
            <input type="text" name="num2" value={num2} onChange={(e)=>{setNum2(e.target.value)}}/>
            <br />
            <br />
            <button onClick={()=>{setRes(Number(num1)+Number(num2))}}>ADD</button>&nbsp;
            <button onClick={()=>{setRes(Number(num1)-Number(num2))}}>DIFF</button>&nbsp;
            <button onClick={()=>{setRes(Number(num1)*Number(num2))}}>MUL</button>&nbsp;
            <button onClick={()=>{setRes(Number(num1)/Number(num2))}}>DIV</button>
            <br />
            <br />
            <h1>{res}</h1>
        </div>
    )
}

export default page