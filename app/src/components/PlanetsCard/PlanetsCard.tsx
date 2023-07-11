import {Planet} from "../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";

const PlanetsCard = (props: { planets: Planet[]; }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-5">
      <h1 className="text-2xl font-starJediOutlined">Planets</h1>
      <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
        {props?.planets?.map((planet: Planet, v: Key | null | undefined) => {
          return (
            <div key={v} className="hover:cursor-pointer border-2 border-gold p-2 rounded-2xl"
                 onClick={() => navigate(`/planets/${planet?.url.split('/')[5]}`)}>
              <p className="font-starJedi">Nom: {planet.name?.toLowerCase()}</p>
              <p className="font-starJedi">Population: {planet.population}</p>
              <p className="font-starJedi">Climat: {planet.climate}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlanetsCard;
