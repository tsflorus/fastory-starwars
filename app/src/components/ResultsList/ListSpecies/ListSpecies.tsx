import {Species} from "../../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";
import {DotSpinner} from "../../DotSpinner";

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
      <div className="flex flex-row justify-between items-center rounded">
        <h1 className="text-2xl font-starJediOutlined">Espèces</h1>
        <div className="flex flex-row items-center justify-center rounded-full w-1/12 text-center bg-chewy font-starJedi">
          {props.loading ? <DotSpinner /> : (props.species?.length ?? 0)}
        </div>
      </div>
      {/*@ts-ignore*/}
      {props.species?.length && props.species.map((species: Species, p: Key | null | undefined) => {
        return (
          <div
            key={p} onClick={() => goToPage(species.url, 'species')}
            className="flex flex-row justify-between items-center p-2 my-3 rounded-xl hover:cursor-pointer border-2 border-chewy">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-starJedi">{species.name.toLowerCase()}</p>
              <p className="font-starJedi">Classification: {species.classification}</p>
            </div>
            <div>
              <p className="font-starJedi text-right">Langue: {species.language.toLowerCase()}</p>
              <p className="font-starJedi text-right">Désignation: {species.designation.toLowerCase()}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListSpecies
