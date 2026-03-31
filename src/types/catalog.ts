export type BadgeColor = 'red' | 'white' | 'green'

export interface Badge {
  text: string
  color: BadgeColor
}

export interface Movie {
  img: string
  youtube: string
  top10?: boolean
  badge?: Badge
  progress?: number
}

export interface Category {
  title: string
  items: Movie[]
}