import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { tPublisher } from "../types";
import { HeroCard } from "./HeroCard";

type Props = {
  publisher: tPublisher
}

export function HeroList({ publisher }: Props) {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (

    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} Hero={hero} />
        ))
      }
    </div>
  )
}