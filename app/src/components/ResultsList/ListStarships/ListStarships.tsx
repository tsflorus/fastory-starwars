import {Starship} from "../../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";
import {Header} from "../Header";

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
      <Header title='Vaisseaux' loading={props.loading} itemsLength={props.starships?.length} />
      {/*@ts-ignore*/}
      {props.starships?.length ? props.starships.map((starship: Starship, p: Key | null | undefined) => {
        return (
          <div
            key={p} onClick={() => goToPage(starship.url, 'starships')}
            className="flex md:flex-row flex-col md:justify-between justify-center items-center md:items-start p-2 my-3 rounded-xl hover:cursor-pointer border-2 border-rebel-red">
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <p className="text-xl font-starJedi">{starship.name.toLowerCase()}</p>
              <p className="font-starJedi">Fabricant: {starship.manufacturer}</p>
            </div>
            <div>
              <p className="font-starJedi md:text-right text-center">Modèle: {starship.model.toLowerCase()}</p>
              <p className="font-starJedi md:text-right text-center">Passagers: {starship.passengers.toLowerCase()}</p>
            </div>
          </div>
        )
      }) : ''}
    </div>
  )
}

export default ListStarships
