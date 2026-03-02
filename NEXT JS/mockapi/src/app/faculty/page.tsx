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
<div className="container mt-5 p-4 border rounded shadow-sm bg-white">
  <div className="row fw-bold border-bottom pb-2 mb-3 d-none d-md-flex text-muted">
    <div className="col-1 px-3">ID</div>
    <div className="col-3">Name</div>
    <div className="col-3">City</div>
    <div className="col-2 text-center">Image</div>
    <div className="col-3 text-end">Action</div>
  </div>

  {/* Data Rows */}
  {data.map((user: any) => (
    <div 
      key={user.id} 
      className="row align-items-center py-3 border-bottom hover-shadow-sm" 
    >
      <div className="col-1 px-3 text-muted">
        {user.id}
      </div>
      <div className="col-3 fw-bold">
        {user.name}
      </div>
      <div className="col-3">
        {user.city}
      </div>
      <div className="col-2 text-center">
        <img 
          src={user.img} 
          width="45" 
          height="45" 
          className="rounded-circle border" 
          alt="avatar"
          style={{ objectFit: 'cover' }} 
        />
      </div>
      <div className="col-3 text-end">
        <button
          onClick={() => router.push(`/student/${user.id}`)}
          className="btn btn-outline-primary btn-sm px-3"
        >
          View More
        </button>
      </div>
    </div>
  ))}
</div>
  );
}

export default Page;