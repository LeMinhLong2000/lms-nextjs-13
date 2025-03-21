import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const data = await req.json();
    const title = data.title;

    if (!userId) {
      return new NextResponse("Unathorized", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (err) {
    console.error(err);
    return new NextResponse("Error", { status: 500 });
  }
}
