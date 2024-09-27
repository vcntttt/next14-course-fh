import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(request.method);
  
  return NextResponse.json({ name: "Next.js" });
}
