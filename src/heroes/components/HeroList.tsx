import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { tPublisher } from "../types";
import { HeroCard } from "./HeroCard";

type Props = {
  publisher: tPublisher
}

export function HeroList({ publisher }: Props) {

  const heroes = getHeroesByPublisher(publisher)

  return (

    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} Hero={hero} />
        ))
      }
    </div>
  )
}