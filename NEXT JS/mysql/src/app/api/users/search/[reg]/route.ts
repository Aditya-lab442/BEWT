import pool from '@/app/lib/lib'
import { NextRequest, NextResponse } from 'next/server'
export async function GET(req:NextRequest,{params}:{params:Promise<{reg:String}>}) {
    try {
        const p = await params
        const {reg} = await p
        const [row] = await pool.query('select * from movies where MovieName like ?',[`%${reg}%`])
        return NextResponse.json(row)
    } catch (error) {
        console.log(error)
    }
}