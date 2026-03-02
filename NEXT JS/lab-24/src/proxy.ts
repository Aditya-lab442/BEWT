import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl
  if(!url.searchParams.get("pageNo")){
    const newurl = url.searchParams.set("pageNo","0")
    
  }

  return NextResponse.next();
}
