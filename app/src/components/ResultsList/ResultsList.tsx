import {Film, Person, Planet, Species, Starship, Vehicle} from "../../../data/types";
import {ListPeople} from "./ListPeople";
import {ListPlanets} from "./ListPlanets";
import {ListFilms} from "./ListFilms";
import {ListSpecies} from "./ListSpecies";
import {ListVehicles} from "./ListVehicles";
import {ListStarships} from "./ListStarships";

type Props = {
  results: {
    people: Array<Person>,
    planets: Array<Planet>,
    films: Array<Film>,
    species: Array<Species>,
    vehicles: Array<Vehicle>,
    starships: Array<Starship>,
  },
  loading: boolean
}

const ResultsList = (props: Props) => {
  return (
    <div className="md:w-8/12 w-full">
      <ListPeople people={props.results.people} loading={props.loading} />
      <ListPlanets planets={props.results.planets} loading={props.loading} />
      <ListFilms films={props.results.films} loading={props.loading} />
      <ListSpecies species={props.results.species} loading={props.loading} />
      <ListVehicles vehicles={props.results.vehicles} loading={props.loading} />
      <ListStarships starships={props.results.starships} loading={props.loading} />
    </div>
  )
}

export default ResultsList
