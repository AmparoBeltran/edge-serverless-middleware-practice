// this file creates two API endpoints

export const dynamic = "force-dynamic";

//with the next line the following functions will be edge functions
export const runtime = "edge";

import { todos } from "@/lib/data";
import { NextResponse } from "next/server";

//serverless functions

export async function GET(request: Request) {
  return Response.json({ todos });
}

export async function POST(request: Request) {
  const { todo } = await request.json();
  todos.push(todo);
  const res = new Response(JSON.stringify({ todos }), { status: 201 });

  return res;
}
