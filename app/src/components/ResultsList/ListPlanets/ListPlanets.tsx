import {Planet} from "../../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";
import {DotSpinner} from "../../DotSpinner";
import {Header} from "../Header";

type Props = {
  planets: Array<Planet | null>,
  loading: boolean,
}

const ListPlanets = (props: Props) => {
  const navigate = useNavigate();

  const goToPage = async (url: string, category: string) => {
    let id = url.split('/')[5];
    await navigate(`/${category}/${id}`)
  }

  return (
    <div>
      <Header title='Planètes' loading={props.loading} itemsLength={props.planets?.length} color='gold' />
      {/*@ts-ignore*/}
      {props.planets?.length ? props.planets.map((planet: Planet, p: Key | null | undefined) => {
        return (
          <div
            key={p} onClick={() => goToPage(planet.url, 'planets')}
            className="flex flex-row justify-between items-center p-2 my-3 rounded-xl hover:cursor-pointer border-2 border-gold">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-starJedi">{planet.name.toLowerCase()}</p>
              <p className="font-starJedi">Population: {planet.population}</p>
            </div>
            <div>
              <p className="font-starJedi text-right">Climat: {planet.climate}</p>
              <p className="font-starJedi text-right">Terrain: {planet.terrain}</p>
            </div>
          </div>
        )
      }) : ''}
    </div>
  )
}

export default ListPlanets
