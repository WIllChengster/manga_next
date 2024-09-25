export type Chapter = {
  id: string
  type: 'chapter'
  attributes: {
    volume: unknown,
    chapter: string
    title: unknown,
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