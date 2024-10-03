export type Chapter = {
  id: string
  type: 'chapter'
  attributes: {
    volume: string,
    chapter: string
    title: string,
    translatedLanguage: string
    publishAt: string
    readableAt: string
    createdAt: string
    updatedAt: string
    pages: number,
    version: number
  }
  relationships: Relationship[]
}

type Relationship = {
  id: string
  type: string
  attributes: object
}

export type ChapterPage = {
  result: 'ok',
  baseUrl: string,
  chapter: {
    hash: string,
    data: string[],
    dataSaver: string[]
  }
}

export type ChapterPageError = {
  result: 'error',
  errors: Error[]
}

type Error = {
  id: string,
  status: 404,
  title: string,
  detail: string,
  context: null
}
