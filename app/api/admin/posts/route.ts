import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { put } from "@vercel/blob";
import { getPosts, savePosts, deleteImage, Post } from "@/lib/posts";
import sharp from "sharp";

// Password MUST be provided via environment variable
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

/**
 * Helper to validate the admin password from the Authorization header.
 */
function validateAuth(req: Request) {
  const authHeader = req.headers.get("Authorization");
  if (!ADMIN_PASSWORD) {
    console.error("ADMIN_PASSWORD is not set in environment variables!");
    return false;
  }
  const isValid = authHeader === ADMIN_PASSWORD;
  if (!isValid) {
    console.log("Auth failed: Header doesn't match ADMIN_PASSWORD");
  }
  return isValid;
}

export async function POST(req: Request) {
  try {
    if (!validateAuth(req)) {
      return NextResponse.json({ error: "Neautorizat! Parolă incorectă sau lipsă." }, { status: 401 });
    }

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const file = formData.get("image") as File | null;
    const customDate = formData.get("date") as string;

    if (!title || !content) {
      return NextResponse.json({ error: "Titlul și conținutul sunt obligatorii!" }, { status: 400 });
    }

    let imageUrl = "/assets/images/images/bgr.webp";

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const webpBuffer = await sharp(buffer).webp().toBuffer();

      if (process.env.BLOB_READ_WRITE_TOKEN) {
        const filename = `${Date.now()}-${path.parse(file.name).name}.webp`;
        const blob = await put(`posts/${filename}`, webpBuffer, {
          access: "public",
        });
        imageUrl = blob.url;
      } else {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = `post-${uniqueSuffix}.webp`;
        const uploadDir = path.join(process.cwd(), "public", "assets", "uploads");
        try { await fs.access(uploadDir); } catch { await fs.mkdir(uploadDir, { recursive: true }); }
        const filePath = path.join(uploadDir, filename);
        await fs.writeFile(filePath, webpBuffer);
        imageUrl = `/assets/uploads/${filename}`;
      }
    }

    const posts = await getPosts();
    const maxId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) : 0;
    
    const newPost: Post = {
      id: maxId + 1,
      title,
      content,
      imageUrl,
      createdAt: customDate ? new Date(customDate).toISOString() : new Date().toISOString()
    };

    posts.push(newPost);
    await savePosts(posts);

    return NextResponse.json(newPost);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in POST /api/admin/posts:", error);
    return NextResponse.json({ error: `Eroare server: ${message}` }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    if (!validateAuth(req)) {
      return NextResponse.json({ error: "Neautorizat!" }, { status: 401 });
    }

    const formData = await req.formData();
    const idStr = formData.get("id") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const file = formData.get("image") as File | null;
    const customDate = formData.get("date") as string;

    if (!idStr) {
      return NextResponse.json({ error: "Lipsă ID postare." }, { status: 400 });
    }

    const id = Number(idStr);
    const posts = await getPosts();
    const postIndex = posts.findIndex((p) => p.id === id);

    if (postIndex === -1) {
      return NextResponse.json({ error: "Postarea nu a fost găsită." }, { status: 404 });
    }

    if (!title || !content) {
      return NextResponse.json({ error: "Titlul și conținutul sunt obligatorii!" }, { status: 400 });
    }

    const updatedPost = { ...posts[postIndex], title, content };
    if (customDate) {
      updatedPost.createdAt = new Date(customDate).toISOString();
    }

    if (file && file.size > 0) {
      let newImageUrl = "";
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const webpBuffer = await sharp(buffer).webp().toBuffer();

      if (process.env.BLOB_READ_WRITE_TOKEN) {
        const filename = `${Date.now()}-${path.parse(file.name).name}.webp`;
        const blob = await put(`posts/${filename}`, webpBuffer, {
          access: "public",
        });
        newImageUrl = blob.url;
      } else {
        const filename = `post-${Date.now()}.webp`;
        const uploadDir = path.join(process.cwd(), "public", "assets", "uploads");
        try { await fs.access(uploadDir); } catch { await fs.mkdir(uploadDir, { recursive: true }); }
        await fs.writeFile(path.join(uploadDir, filename), webpBuffer);
        newImageUrl = `/assets/uploads/${filename}`;
      }

      await deleteImage(posts[postIndex].imageUrl);
      updatedPost.imageUrl = newImageUrl;
    }

    posts[postIndex] = updatedPost;
    await savePosts(posts);

    return NextResponse.json(updatedPost);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in PUT /api/admin/posts:", error);
    return NextResponse.json({ error: `Eroare server: ${message}` }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    if (!validateAuth(req)) {
      return NextResponse.json({ error: "Neautorizat!" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const idStr = searchParams.get("id");

    if (!idStr) {
      return NextResponse.json({ error: "Lipsă ID postare." }, { status: 400 });
    }

    const id = Number(idStr);
    const posts = await getPosts();
    const postToDelete = posts.find((p) => p.id === id);

    if (!postToDelete) {
      return NextResponse.json({ error: "Postarea nu a fost găsită." }, { status: 404 });
    }

    const updatedPosts = posts.filter((p) => p.id !== id);
    await savePosts(updatedPosts);
    await deleteImage(postToDelete.imageUrl);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in DELETE /api/admin/posts:", error);
    return NextResponse.json({ error: `Eroare server: ${message}` }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    if (validateAuth(req)) {
      return NextResponse.json({ authenticated: true });
    }
    return NextResponse.json({ authenticated: false }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Eroare server." }, { status: 500 });
  }
}
