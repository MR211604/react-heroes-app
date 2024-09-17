import { HeroList } from "../components/HeroList"

type Props = {}

export function DCPage({ }: Props) {
  return (
    <>

      <h1>DC Comics</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </>
  )
}