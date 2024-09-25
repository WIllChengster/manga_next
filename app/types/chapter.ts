export type Chapter = {
  id: string
  type: 'chapter'
  attributes: {
    volume: any,
    chapter: string
    title: any,
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