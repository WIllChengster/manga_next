import { Manga } from "@/app/types/manga"
import { Chapter } from "@/app/types/chapter"
import Link from "next/link"

const getManga = async (mangaId: string) => {
  const res = await fetch(`https://api.mangadex.org/manga/${mangaId}?includes[]=cover_art`, {
    headers: {
      'User-Agent': 'Browser'
    }
  })
  const resJson = await res.json()

  return resJson.data
}

const getChapters = async (mangaId: string) => {

  const res = await fetch(`https://api.mangadex.org/manga/${mangaId}/feed?translatedLanguage[]=en&order[chapter]=asc
    `, {
    headers: {
      'User-Agent': 'Browser'
    }
  })
  const resJson = await res.json()
  return resJson.data
}

const Page = async ({params}: { params: { mangaId: string } }) => {
  const mangaId = params.mangaId

  const manga: Manga = await getManga(mangaId)
  const chapters: Chapter[] = await getChapters(mangaId)

  const chapterComponentMap = chapters.map((item, index) => {
    return (
      <Link
        key={item.id + index}
        href={`/manga/${mangaId}/${item.id}`}
      >
        <div
          className="border rounded-lg p-1 m-1"

        >
          {item.attributes.chapter} {item.attributes.title}
        </div>
      </Link>
    )
  })

  const coverArtRelationships = manga.relationships.find(item => item.type === 'cover_art');
  const fileName = coverArtRelationships?.attributes.fileName

  return (
    <div>
      <img src={`/api/mangadex/images/covers/${manga.id}/${fileName}.256.jpg`}></img>

      <p className="text-2xl" >{manga.attributes.title.en || Object.values(manga.attributes.title)[0]}</p>

      <p>{manga.attributes.description.en}</p>

      {chapterComponentMap}

    </div>
  )
}

export default Page