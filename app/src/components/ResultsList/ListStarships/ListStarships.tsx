import {Starship} from "../../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";
import {DotSpinner} from "../../DotSpinner";

type Props = {
  starships: Array<Starship | null>,
  loading: boolean,
}

const ListStarships = (props: Props) => {
  const navigate = useNavigate();

  const goToPage = async (url: string, category: string) => {
    let id = url.split('/')[5];
    await navigate(`/${category}/${id}`)
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center rounded">
        <h1 className="text-2xl font-starJediOutlined">Véhicules</h1>
        <div className="flex flex-row items-center justify-center rounded-full w-1/12 text-center bg-rebel-red font-starJedi">
          {props.loading ? <DotSpinner /> : (props.starships?.length ?? 0)}
        </div>
      </div>
      {/*@ts-ignore*/}
      {props.starships?.length && props.starships.map((starship: Starship, p: Key | null | undefined) => {
        return (
          <div
            key={p} onClick={() => goToPage(starship.url, 'starships')}
            className="flex flex-row justify-between items-center p-2 my-3 rounded-xl hover:cursor-pointer border-2 border-rebel-red">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-starJedi">{starship.name.toLowerCase()}</p>
              <p className="font-starJedi">Fabricant: {starship.manufacturer}</p>
            </div>
            <div>
              <p className="font-starJedi text-right">Modèle: {starship.model.toLowerCase()}</p>
              <p className="font-starJedi text-right">Passagers: {starship.passengers.toLowerCase()}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListStarships
