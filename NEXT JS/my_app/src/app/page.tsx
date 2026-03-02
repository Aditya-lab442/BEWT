import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="border border-2">
          <div className="row border border-2">
            <div className="col border border-2"><Link href="/Login">Auth</Link></div>
            <div className="col border border-2"><Link href="/dashboard">Admin</Link></div>
            <div className="col border border-2"><Link href="CilentDashboard">Client</Link></div>
          </div>
          <div className="row border border-2">
            <div className="col-2 border border-2"><p>SIDEBAR</p></div>
            <div className="col border border-2">HOME PAGE</div>
          </div>
          <div className="row border border-2">
            <p>FOOTER</p>
          </div>
        </div>
    </>
  );
}
