import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"
import { useMemo } from "react"

type Props = {}

export function HeroPage({ }: Props) {

  const { hero_id } = useParams()
  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }

  const heroById = useMemo(() =>
    getHeroById(hero_id), [hero_id]);

  if (!heroById) {
    return <Navigate to="/" />
  }

  return (
    <div className="row mt-5 animate__animated animate__slideInLeft">
      <div className="col-4">
        <img src={`/src/assets/heroes/${heroById.id}.jpg`} alt="" className="img-thumbnail" />
      </div>

      <div className="col-8">
        <h3>{heroById.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> {heroById.alter_ego} </li>
          <li className="list-group-item"> <b>Publisher:</b> {heroById.publisher} </li>
          <li className="list-group-item"> <b>First appearance:</b> {heroById.first_appearance} </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{heroById.characters}</p>

        <button onClick={onNavigateBack} className="btn btn-outline-primary">
          Go back
        </button>
      </div>

    </div>
  )
}