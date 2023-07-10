import {useDispatch, useSelector} from "react-redux";
import {searchName} from "../../actions/searchActions";
import {Film, Person, Planet, Species, Starship, Vehicle} from "../../../data/types";
import {Key, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const DashboardScreen = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>('');
  const {loading, searchResult, error} = useSelector(
    // @ts-ignore
    (state) => state.search
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToPage = async (url: string, category: string) => {
    let id = url.split('/')[5];
    await navigate(`/${category}/${id}`)
  }

  const handleInputChange = (event: { target: { value: string; }; }) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchValue, 500]);

  useEffect(() => {
    // @ts-ignore
    dispatch(searchName({nameToSearch: debouncedSearchValue}))
  }, [debouncedSearchValue])

  return (
    <>
      {error && <h2>{error}</h2>}
      <h1 className="font-jedi-outlined">Search</h1>
        <div className='form-group'>
          <label htmlFor='nameToSearch'>Name to search</label>
          <input
            type='nameToSearch'
            className="bg-black border-2 border-yellow"
            value={searchValue}
            onChange={handleInputChange}
            required
          />
        </div>
      {loading && <p>Loading</p>}

        <div style={{marginLeft: '5vw', marginRight: '5vw'}}>
          <div>
            <h1>People</h1>
            {searchResult.people?.length && searchResult.people.map((person: Person, p: Key | null | undefined) => {
              return (
                <div key={p} style={{border: '1px solid black'}} onClick={() => goToPage(person.url, 'people')}>
                  <p>{person.name}</p>
                  <p>{person.height}</p>
                  <p>{person.mass}</p>
                  <p>{person.birth_year}</p>
                </div>
              )
            })}
          </div>
          <div>
            <h1>Planets</h1>
            {searchResult.planets?.length && searchResult.planets.map((planet: Planet, p: Key | null | undefined) => {
              return (
                <div key={p} style={{border: '1px solid black'}} onClick={() => goToPage(planet.url, 'planets')}>
                  <p>{planet.name}</p>
                  <p>{planet.climate}</p>
                  <p>{planet.terrain}</p>
                  <p>{planet.population}</p>
                </div>
              )
            })}
          </div>
          <div>
            <h1>Films</h1>
            {searchResult.films?.length && searchResult.films.map((film: Film, p: Key | null | undefined) => {
              return (
                <div key={p} style={{border: '1px solid black'}} onClick={() => goToPage(film.url, 'films')}>
                  <p>{film.title}</p>
                  <p>{film.director}</p>
                  <p>{film.producer}</p>
                </div>
              )
            })}
          </div>
          <div>
            <h1>Species</h1>
            {searchResult.species?.length && searchResult.species.map((specie: Species, p: Key | null | undefined) => {
              return (
                <div key={p} style={{border: '1px solid black'}} onClick={() => goToPage(specie.url, 'species')}>
                  <p>{specie.name}</p>
                  <p>{specie.language}</p>
                  <p>{specie.classification}</p>
                </div>
              )
            })}
          </div>
          <div>
            <h1>Vehicles</h1>
            {searchResult.vehicles?.length && searchResult.vehicles.map((vehicle: Vehicle, p: Key | null | undefined) => {
              return (
                <div key={p} style={{border: '1px solid black'}} onClick={() => goToPage(vehicle.url, 'vehicles')}>
                  <p>{vehicle.name}</p>
                  <p>{vehicle.vehicle_class}</p>
                  <p>{vehicle.model}</p>
                </div>
              )
            })}
          </div>
          <div>
            <h1>Starships</h1>
            {searchResult.starships?.length && searchResult.starships.map((starship: Starship, p: Key | null | undefined) => {
              return (
                <div key={p} style={{border: '1px solid black'}} onClick={() => goToPage(starship.url, 'starships')}>
                  <p>{starship.name}</p>
                  <p>{starship.manufacturer}</p>
                  <p>{starship.model}</p>
                  <p>{starship.passengers}</p>
                </div>
              )
            })}
          </div>
        </div>
    </>
  )
}
export default DashboardScreen
