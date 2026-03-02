"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);

  async function fetchData() {
    try {
      const res = await fetch("https://68c107490b196b9ce1c5aa71.mockapi.io/faculty");
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
  <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">city</th>
      <th scope="col">img</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((user:any)=>(
    <tr key={user.id}>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.city}</td>

      <td className="text-center">
                  <img 
                    src={user.img} 
                    width="45" 
                    height="45" 
                    className="rounded-circle border" 
                    alt="avatar"
                    style={{ objectFit: 'cover' }} 
                  />
                </td>
                <td className="text-end">
                  <button
                    onClick={() => router.push(`/faculty/${user.id}`)}
                    className="btn btn-outline-primary btn-sm px-3"
                  >
                    View More
                  </button>
                </td>
    </tr>
    

    ))}
    
  </tbody>
</table>
  );
}

export default Page;