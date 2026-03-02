import React from 'react'

const page = async ({searchParams}:any) => {

    const params = await searchParams
    const page = params.pageNo
  return (
    <div>
        {page.toString()}
    </div>
  )
}

export default page