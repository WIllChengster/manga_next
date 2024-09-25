/* eslint-disable @typescript-eslint/no-explicit-any */

export type Manga = {
  id: string
  type: 'manga'
  attributes: {
    title: {
      en: string
    },
    altTitles: object
    description: {
      en: string
    }
    isLocked: boolean,
    originalLanguage: string,
    lastVolume: string
    lastChapter: string
    publicationDemographic: string
    status: string
    year: number // 4 digit year
    contentRating: string
    tags: object
    state: string
    chapterNumbersResetOnNewVolume: false,
    createdAt: string
    updatedAt: string
    version: number,
    availableTranslatedLanguages: string[]
    latestUploadedChapter: string //chapter id
  }
  relationships: mangaRelationship[]
}

type mangaRelationship = {
  id: string
  type: 'author' | 'artist' | 'cover_art'
  attributes: any | coverArt
}

type coverArt = {
  attributes: {
    description: string
    volume: null
    filename: string
    locale: string
    createdAt: string
    updatedAt: string
    version: number
  }
}