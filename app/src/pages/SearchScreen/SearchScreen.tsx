import {useDispatch, useSelector} from "react-redux";
import {searchName} from "../../actions/searchActions";
import {Film, Person, Planet, Species, Starship, Vehicle} from "../../../data/types";
import {Key, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import human from '../../assets/img/human.png'
import wookie from '../../assets/img/wookie.png'

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  const [language, setLanguage] = useState<string>('human');
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
    // TODO: handle filters
    if (debouncedSearchValue.length > 0) {
      // @ts-ignore
      dispatch(searchName({nameToSearch: debouncedSearchValue, filter: filter.length ? filter : null}))
    }
  }, [debouncedSearchValue])

  return (
    <div className="flex flex-col justify-center items-center mt-20 w-8/12 mx-auto">
      {error && <h2>{error}</h2>}
      <h1 className="font-jedi-outlined text-4xl text-yellow text-center">Rechercher dans la base de l'empire</h1>
      <div className="flex flex-row items-center justify-center w-8/12">
        <input
          placeholder='Nom à rechercher'
          type='nameToSearch'
          className='border-white bg-black p-2 font-starJedi rounded w-10/12 text-center my-10'
          style={{borderWidth: 1}}
          value={searchValue}
          onChange={handleInputChange}
          required
        />
        <select id="countries" className="bg-black border-2 border-yellow w-2/12 mx-3 p-2 rounded" value={filter}
                onChange={(e) => setFilter(e.target.value)}>
          <option value="">Tout</option>
          <option value="people">Personnages</option>
          <option value="planets">Planètes</option>
          <option value="films">Films</option>
          <option value="species">Espèces</option>
          <option value="vehicles">Véhicules</option>
          <option value="starships">Vaisseaux</option>
        </select>

        <div className="w-1/12 flex flex-row justify-center items-center" style={{height: 50}}>
          {language === 'human' && <img src={human} style={{height: 50, width: 75}} className="hover:cursor-pointer" alt='' onClick={() => setLanguage('wookie')}/>}
          {language === 'wookie' && <img src={wookie} style={{height: 50, width: 50}} className="hover:cursor-pointer" alt='' onClick={() => setLanguage('human')}/>}
        </div>
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
    </div>
  )
}
export default SearchScreen
