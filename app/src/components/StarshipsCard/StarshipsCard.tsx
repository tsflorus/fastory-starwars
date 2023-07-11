import {Starship} from "../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";

const StarshipsCard = (props: { starships: Starship[]; }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-5">
      <h1 className="text-2xl font-starJediOutlined">Vaisseaux</h1>
      <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
        {props.starships?.map((starship: Starship, v: Key | null | undefined) => {
          return (
            <div key={v} className="hover:cursor-pointer border-2 border-rebel-red p-2 rounded-2xl"
                 onClick={() => navigate(`/starships/${starship?.url.split('/')[5]}`)}>
              <p className="font-starJedi">Nom: {starship.name}</p>
              <p className="font-starJedi">Modèle: {starship.model}</p>
              <p className="font-starJedi">Classe: {starship.starship_class}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StarshipsCard;
