import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { put, del } from "@vercel/blob";

export const runtime = 'edge';

// The simple password to protect adding and deleting records
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "osutAdmin2026";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const password = formData.get("password") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const file = formData.get("image") as File | null;

    // Check password
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Parolă incorectă!" }, { status: 401 });
    }

    // Validate inputs
    if (!title || !content) {
      return NextResponse.json({ error: "Titlul și conținutul sunt obligatorii!" }, { status: 400 });
    }

    let imageUrl = "/assets/images/placeholder.jpg";

    // Handle File Upload
    if (file && file.size > 0 && process.env.BLOB_READ_WRITE_TOKEN) {
      // Upload to Vercel Blob
      const blob = await put(`posts/${Date.now()}-${file.name}`, file, {
        access: "public",
      });
      imageUrl = blob.url;
    }

    const customDate = formData.get("date") as string;

    // Insert into database
    const post = await prisma.post.create({
      data: { 
        title, 
        content, 
        imageUrl,
        createdAt: customDate ? new Date(customDate) : new Date()
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Eroare la crearea postării." }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const formData = await req.formData();
    const password = formData.get("password") as string;
    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const file = formData.get("image") as File | null;

    // Check password
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Parolă incorectă!" }, { status: 401 });
    }

    if (!id) {
      return NextResponse.json({ error: "Lipsă ID postare." }, { status: 400 });
    }

    // Validate inputs
    if (!title || !content) {
      return NextResponse.json({ error: "Titlul și conținutul sunt obligatorii!" }, { status: 400 });
    }

    const customDate = formData.get("date") as string;
    const updateData: any = { title, content };

    if (customDate) {
      updateData.createdAt = new Date(customDate);
    }

    // Handle File Upload if a new file is provided
    if (file && file.size > 0) {
      let newImageUrl = "";
      
      if (process.env.BLOB_READ_WRITE_TOKEN) {
        const blob = await put(`posts/${Date.now()}-${file.name}`, file, {
          access: "public",
        });
        newImageUrl = blob.url;
      }

      updateData.imageUrl = newImageUrl;

      // Delete the old image
      const existingPost = await prisma.post.findUnique({ where: { id: Number(id) } });
      if (existingPost?.imageUrl) {
        if (existingPost.imageUrl.includes("public.blob.vercel-storage.com")) {
          try { await del(existingPost.imageUrl); } catch (e) { console.error(e); }
        }
      }
    }

    // Update database
    const updatedPost = await prisma.post.update({
      where: { id: Number(id) },
      data: updateData,
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json({ error: "Eroare la actualizarea postării." }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const password = req.headers.get("Authorization");

    // Check password
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Parolă incorectă!" }, { status: 401 });
    }

    if (!id) {
      return NextResponse.json({ error: "Lipsă ID postare." }, { status: 400 });
    }

    // Fetch before delete to get image URL
    const post = await prisma.post.findUnique({ where: { id: Number(id) } });

    // Delete from database
    await prisma.post.delete({ where: { id: Number(id) } });

    // Attempt to delete the image file
    if (post?.imageUrl) {
      if (post.imageUrl.includes("public.blob.vercel-storage.com")) {
        try { await del(post.imageUrl); } catch (e) { console.error(e); }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ error: "Eroare la ștergerea postării." }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const password = req.headers.get("Authorization");

    if (password === ADMIN_PASSWORD) {
      return NextResponse.json({ authenticated: true });
    }
    
    return NextResponse.json({ authenticated: false }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: "Eroare server." }, { status: 500 });
  }
}
