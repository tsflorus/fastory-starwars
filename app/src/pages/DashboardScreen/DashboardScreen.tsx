import {useDispatch, useSelector} from "react-redux";
import {FieldValues, useForm} from "react-hook-form";
import {searchName} from "../../actions/searchActions";
import {Film, Person, Planet, Species, Starship, Vehicle} from "../../../data/types";
import { Key } from "react";

const DashboardScreen = () => {
  const {loading, searchResult, error} = useSelector(
    // @ts-ignore
    (state) => state.search
  )

  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const submitForm = (data: FieldValues) => {
    // @ts-ignore
    dispatch(searchName(data))
  }

  return (
    <>
      {error && <h2>{error}</h2>}
      <h1 className="font-jedi-outlined">Search</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className='form-group'>
          <label htmlFor='nameToSearch'>Name to search</label>
          <input
            type='nameToSearch'
            className='form-input'
            {...register('nameToSearch')}
            required
          />
        </div>
        <button type='submit' className='button'>
          Search
        </button>
      </form>

      {!loading && searchResult && (
        <div style={{marginLeft: '5vw', marginRight: '5vw'}}>
          <div>
            <h1>People</h1>
            {searchResult.people.length && searchResult.people.map((person: Person, p: Key | null | undefined) => {
              return (
                <div key={p} style={{border: '1px solid black'}}>
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
            {searchResult.planets.length && searchResult.planets.map((planet: Planet, p: Key | null | undefined) => {
              return (
                <div key={p} style={{border: '1px solid black'}}>
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
            {searchResult.films.length && searchResult.films.map((film: Film, p: Key | null | undefined) => {
              return (
                <div key={p} style={{border: '1px solid black'}}>
                  <p>{film.title}</p>
                  <p>{film.director}</p>
                  <p>{film.producer}</p>
                </div>
              )
            })}
          </div>
          <div>
            <h1>Species</h1>
            {searchResult.species.length && searchResult.species.map((specie: Species, p: Key | null | undefined) => {
              return (
                <div key={p} style={{border: '1px solid black'}}>
                  <p>{specie.name}</p>
                  <p>{specie.language}</p>
                  <p>{specie.classification}</p>
                </div>
              )
            })}
          </div>
          <div>
            <h1>Vehicles</h1>
            {searchResult.vehicles.length && searchResult.vehicles.map((vehicle: Vehicle, p: Key | null | undefined) => {
              return (
                <div key={p} style={{border: '1px solid black'}}>
                  <p>{vehicle.name}</p>
                  <p>{vehicle.vehicle_class}</p>
                  <p>{vehicle.model}</p>
                </div>
              )
            })}
          </div>
          <div>
            <h1>Starships</h1>
            {searchResult.starships.length && searchResult.starships.map((starship: Starship, p: Key | null | undefined) => {
              return (
                <div key={p} style={{border: '1px solid black'}}>
                  <p>{starship.name}</p>
                  <p>{starship.manufacturer}</p>
                  <p>{starship.model}</p>
                  <p>{starship.passengers}</p>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {loading && <h1>Loading</h1>}
    </>
  )
}
export default DashboardScreen
