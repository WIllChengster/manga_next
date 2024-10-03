import {ChapterPage, ChapterPageError} from '@/app/types/chapter'

type URLParams = {
  params: {
    mangaId: string,
    chapterId: string
  }
}

const getPageURLs = async (chapterId: string): Promise<string[]> => {
  const url = 'https://api.mangadex.org';
  
  const res = await fetch(`${url}/at-home/server/${chapterId}`)

  const json: ChapterPage | ChapterPageError = await res.json();
  if (json.result === 'error') {
    return []
  }

  console.log(json)
  const baseUrl = json.baseUrl
  const chapterHash  = json.chapter.hash
  const data = json.chapter.data;


  const x = data.map((item) => {
    const imageUrl = `${baseUrl}/data/${chapterHash}/${item}`
    // console.log(item, imageUrl)
    return imageUrl
  })
  

  return x
}

const Page = async ({params} : URLParams) => {
  const {chapterId} = params;
  const pageURLs = await getPageURLs(chapterId);

  const pageImages = pageURLs.map((url) => {
    return (
      <div key={url}>
        <img referrerPolicy='no-referrer' src={url}></img>
      </div>
    )
  })

  return (
    <div>
      {pageImages}
    </div>
  )
}

export default Page