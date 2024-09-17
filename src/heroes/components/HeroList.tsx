import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { tPublisher } from "../types";

type Props = {
  publisher: tPublisher
}

export function HeroList({ publisher }: Props) {

  const heroes = getHeroesByPublisher(publisher)

  return (
    <ul>
      {
        heroes.map(hero => (
          <li key={hero.id}>
            {hero.superhero}
          </li>
        ))
      }
    </ul>
  )
}