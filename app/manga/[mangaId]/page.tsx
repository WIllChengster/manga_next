import { Manga } from "@/app/types/manga"

const Page = async ({params}: { params: { mangaId: string } }) => {
  const mangaId = params.mangaId
  
  const res = await fetch(`https://api.mangadex.org/manga/${mangaId}?includes[]=cover_art`)

  const resJson = await res.json()
  const manga: Manga = resJson.data

  const coverArtRelationships = manga.relationships.find(item => item.type === 'cover_art');
  const fileName = coverArtRelationships?.attributes.fileName
  
  console.log(manga)
  return (
    <div>
      <img src={`https://uploads.mangadex.org/covers/${manga.id}/${fileName}.256.jpg`}></img>

      <p className="text-2xl" >{manga.attributes.title.en || Object.values(manga.attributes.title)[0]}</p>

      <p>{manga.attributes.description.en}</p>

    </div>
  )
}

export default Page