import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    try {
        const data = await prisma.student.findMany()
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error)
    }
} 