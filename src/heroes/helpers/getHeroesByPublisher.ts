import { heroes } from "../data/heroes";
import { Heroes, Publisher, tPublisher } from "../types.d";

export const getHeroesByPublisher = (publisher: tPublisher): Heroes[] => {

  if (!Object.values(Publisher).includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no es correcto`);
  }

  return heroes.filter(hero => hero.publisher === publisher);

}