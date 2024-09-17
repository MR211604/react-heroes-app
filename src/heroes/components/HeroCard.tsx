import { Link } from "react-router-dom"
import { Heroes } from "../types"

type Props = {
  Hero: Heroes
}

export function HeroCard({ Hero }: Props) {

  const heroImage = `src/assets/heroes/${Hero.id}.jpg`

  return (
    <div className="col">
      <div className="card">

        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImage} className="card-img" alt={Hero.superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{Hero.superhero}</h5>
              <p className="card-text">{Hero.alter_ego}</p>
              {
                Hero.alter_ego !== Hero.characters &&
                <p className="card-text">{Hero.characters}</p>
              }
              <p className="card-text">
                <small className="text-muted">{Hero.first_appearance}</small>
              </p>

              <Link to={`/hero/${Hero.id}`}>
                Más...
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}