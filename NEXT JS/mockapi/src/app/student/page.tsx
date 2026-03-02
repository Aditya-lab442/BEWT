"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);

  async function fetchData() {
    try {
      const res = await fetch("https://68c107490b196b9ce1c5aa71.mockapi.io/students");
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
    <div className="container mt-5 p-4 border rounded shadow-sm bg-white">

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th className="px-3">ID</th>
              <th>Name</th>
              <th>City</th>
              <th className="text-center">Image</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user: any) => (
              <tr key={user.id}>
                <td className="px-3 text-muted">{user.id}</td>
                <td className="fw-bold">{user.name}</td>
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
                    onClick={() => router.push(`/student/${user.id}`)}
                    className="btn btn-outline-primary btn-sm px-3"
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;