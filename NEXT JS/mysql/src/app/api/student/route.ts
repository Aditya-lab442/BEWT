import pool from '@/app/lib/pool'
import { NextResponse } from 'next/server'
export async function GET() {
    try {
        const res = await pool.query('select * from student')
        return NextResponse.json(res.rows)
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "XYZ"}) 
    }
}