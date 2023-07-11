import {Species} from "../../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";
import {Header} from "../Header";

type Props = {
  species: Array<Species | null>,
  loading: boolean,
}

const ListSpecies = (props: Props) => {
  const navigate = useNavigate();

  const goToPage = async (url: string, category: string) => {
    let id = url.split('/')[5];
    await navigate(`/${category}/${id}`)
  }

  return (
    <div>
      <Header title='Espèces' loading={props.loading} itemsLength={props.species?.length} />
      {/*@ts-ignore*/}
      {props.species?.length ? props.species.map((species: Species, p: Key | null | undefined) => {
        return (
          <div
            key={p} onClick={() => goToPage(species.url, 'species')}
            className="flex md:flex-row flex-col md:justify-between justify-center items-center md:items-start p-2 my-3 rounded-xl hover:cursor-pointer border-2 border-chewy">
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <p className="text-xl font-starJedi">{species.name.toLowerCase()}</p>
              <p className="font-starJedi">Classification: {species.classification}</p>
            </div>
            <div>
              <p className="font-starJedi md:text-right text-center">Langue: {species.language.toLowerCase()}</p>
              <p className="font-starJedi md:text-right text-center">Désignation: {species.designation.toLowerCase()}</p>
            </div>
          </div>
        )
      }) : ''}
    </div>
  )
}

export default ListSpecies
