import Image from "next/image";
import { Manga } from "./types/manga";

const getMangaList = async (): Manga[] => {
  const res = await fetch(`https://api.mangadex.org/manga?includes[]=cover_art&includes[]=manga`)
  const mangaList = await res.json()
  return mangaList.data
}

const getMangaComponentMap = async () => {
  const mangaList = await getMangaList();

  return mangaList.map((manga, index) => {
    console.log(manga.attributes)
    const coverArtRelationships = manga.relationships.find(item => item.type === 'cover_art');
    const fileName = coverArtRelationships?.attributes.fileName
    return (
      <div
        key={manga.id + index}
        className='flex justify-center items-center align'
      >
        <div
          className="basis-1/2 h-full max-h-100px"
        >
          <img className="" src={`https://uploads.mangadex.org/covers/${manga.id}/${fileName}.256.jpg`} ></img>
        </div>
        <div
          className='basis-1/2 overflow-hidden'
        >
          <h1
            className="text-2xl"
          >
            {manga.attributes.title.en || Object.values(manga.attributes.title)[0]}
          </h1>
          <p
            className="text-ellipsis overflow-hidden ..."
          >
            {manga.attributes.description.en}
          </p>

        </div>
      </div>
    )
  })
}

export default async function Home() {
  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {await getMangaComponentMap()}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
