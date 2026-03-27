import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../lib/prisma";

export async function GET(req:NextRequest) {
    try{
        const stu = await prisma.student.findMany()
        return NextResponse.json(stu)
    }catch(err){
        
    }
}