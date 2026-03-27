
import React from 'react'
import { printData } from './printData'
import { formValidate } from './formValidate'
const page = async () => {
    // async function handelSubmit(formdata:FormData){
    //     "use server"
    //     const name = await formdata.get('name')
    //     console.log(name)
    // }
    return (
        <div>
            <form action={formValidate}>
                <input type="text" name='name' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default page