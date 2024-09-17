export interface Heroes {
  id: string;
  superhero: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

export const Publisher = {
  DCComics: "DC Comics",
  MarvelComics: "Marvel Comics",
} as const

export type tPublisher = typeof Publisher[keyof typeof Publisher]

