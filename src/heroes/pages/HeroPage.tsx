import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"

type Props = {}

export function HeroPage({ }: Props) {

  const { hero_id } = useParams()

  const heroById = getHeroById(hero_id)

  if (!heroById) {
    return <Navigate to="/" />
  }


  return (
    <>
      <h1>{heroById?.superhero}</h1>
    </>
  )
}