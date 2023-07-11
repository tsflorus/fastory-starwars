import {Film} from "../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";

const FilmsCard = (props: { films: Film[]; }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-5">
      <h1 className="text-2xl font-starJediOutlined">Films</h1>
      <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
        {props.films?.map((film: Film, v: Key | null | undefined) => {
          return (
            <div key={v} className="hover:cursor-pointer border-2 border-warp-speed p-2 rounded-2xl" onClick={() => navigate(`/films/${film?.url.split('/')[5]}`)}>
              <p className="font-starJedi">Nom: {film.title}</p>
              <p className="font-starJedi">N°: {film.episode_id}</p>
              <p className="font-starJedi">Date de sortie: {film.release_date}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilmsCard;
