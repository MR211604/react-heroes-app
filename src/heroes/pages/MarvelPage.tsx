import { HeroList } from "../components/HeroList"

type Props = {}

export function MarvelPage({ }: Props) {
  return (
    <>
      <h1>Marvel comics</h1>
      <hr />


      <HeroList publisher="Marvel Comics" />
    </>
  )
}