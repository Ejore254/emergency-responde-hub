import { NextResponse } from "next/server";

export async function GET() {
  const response = {
    message: "Welcome to SafeAlert! Your emergency response system is ready.",
  };

  return NextResponse.json(response);
}
