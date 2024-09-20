import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm"
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";
import { HeroCard } from "../components/HeroCard";


type Props = {}

export function SearchPage({ }: Props) {

  const navigate = useNavigate()
  const location = useLocation()
 
  const query = queryString.parse(location.search)
  const heroes = getHeroByName(query.q as string)

  const { searchText, onInputChange } = useForm({
    searchText: query.q as string,
  });

  const showSearch = (query.q?.length === 0) ? true : false
  const showWarning = query.q!.length > 0 && heroes.length === 0 ? true : false

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
  }


  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input name="searchText" autoComplete="off" type="text" placeholder="Find your hero" className="form-control" value={searchText} onChange={onInputChange} />
            <button type="submit" className="btn mt-1 btn-outline-primary btn-block">
              Search
            </button>
          </form>

        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-info" style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger" style={{ display: showWarning ? '' : 'none' }}>
            No hero found with the name: <b>{query.q}</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} Hero={hero} />
            ))
          }

        </div>
      </div>

    </>
  )
}