import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const folder = searchParams.get("folder");

    if (!folder) {
      return NextResponse.json(
        { error: "Folder não informado." },
        { status: 400 }
      );
    }

    const result = await cloudinary.search
      .expression(`folder="${folder}"`)
      .sort_by("created_at", "desc")
      .max_results(500)
      .execute();

    return NextResponse.json(
      result.resources.map((image: any) => ({
        id: image.asset_id,
        public_id: image.public_id,
        url: image.secure_url,
        width: image.width,
        height: image.height,
      }))
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Erro ao buscar imagens." },
      { status: 500 }
    );
  }
}