import { createReadStream } from "fs";
import { NextRequest, NextResponse} from "next/server";


export async function GET(req: NextRequest) {
  const mangaId = req.nextUrl.searchParams.get('mangaId');
  const filename = req.nextUrl.searchParams.get('filename');

  const data = await fetch(`https://uploads.mangadex.org/covers/${mangaId}/${filename}.256.jpg`, {
    cache: 'no-store'
  })

  console.log(data)

  // const image = await data.blob()
  // console.log(URL.createObjectURL(image))  
  // const result = await data.blob();
  // const objectURL = URL.createObjectURL(result);

  return NextResponse.json({data})
}