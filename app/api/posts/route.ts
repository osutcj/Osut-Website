import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const runtime = 'edge';

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: [
        { createdAt: "desc" },
        { id: "desc" }
      ],
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
