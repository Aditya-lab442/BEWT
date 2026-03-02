import pool from '@/app/lib/lib'
import { NextResponse } from 'next/server'
export async function GET() {
    try {
        const [row] = await pool.query('select * from movies')
        return NextResponse.json(row)
    } catch (error) {
        console.log(error)
    }
}