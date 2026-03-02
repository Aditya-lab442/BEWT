import Link from 'next/link'
import React from 'react'

export default function layoutABC({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="border border-2">
                <div className="row border border-2">
                    {/* <div className="col border border-2"><Link href="/">ADD STUDENT</Link></div>
                    <div className="col border border-2"><Link href="/">FEE UPDATE</Link></div> */}
                    <div className="col border border-2"><Link href="/">LOGOUT</Link></div>
                </div>
                <div className="row border border-2">
                    <div className="col-2 border border-2"><p>SIDEBAR</p></div>
                    <div className="col border border-2">{children}</div>
                </div>
                <div className="row border border-2">
                    <p>FOOTER</p>
                </div>
            </div></div>

    )
}