import {Planet} from "../../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";
import {DotSpinner} from "../../DotSpinner";

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
      <div className="flex flex-row justify-between items-center rounded">
        <h1 className="text-2xl font-starJediOutlined">Planètes</h1>
        <div className="flex flex-row items-center justify-center rounded-full w-1/12 text-center bg-gold font-starJedi">
          {props.loading ? <DotSpinner /> : (props.planets?.length ?? 0)}
        </div>
      </div>
      {/*@ts-ignore*/}
      {props.planets?.length && props.planets.map((planet: Planet, p: Key | null | undefined) => {
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
      })}
    </div>
  )
}

export default ListPlanets
