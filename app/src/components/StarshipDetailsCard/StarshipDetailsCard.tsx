import {Film, Person, Starship} from "../../../data/types";
import {useNavigate} from "react-router-dom";
import {Key} from "react";

type Props = {
  starship: Starship
}

// @ts-ignore
const StarshipDetailsCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="my-20">
      {props.starship && (
        <>
          <h1 className="text-8xl font-starJediOutlined text-rebel-red text-center">{props.starship?.name?.toLowerCase()}</h1>
          <div className="w-8/12 mx-auto mt-10 bg-[#010101] border-rebel-red border-2 rounded-2xl p-5">
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">informations de base</h1>
              <div className="flex flex-row flex-wrap items-center justify-between">
                <div>
                  <p className="font-starJedi">Nom: {props.starship?.name?.toLowerCase()}</p>
                  <p className="font-starJedi">Modèle: {props.starship?.model}</p>
                  <p className="font-starJedi">Constructeur: {props.starship?.manufacturer}</p>
                </div>
                <div>
                  <p className="font-starJedi">Classe: {props.starship?.starship_class}</p>
                  <p className="font-starJedi">Équipage: {props.starship?.crew}</p>
                  <p className="font-starJedi">Passagers: {props.starship?.passengers}</p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between mt-5">
                <div>
                  <p className="font-starJedi">Capacité: {props.starship?.cargo_capacity}</p>
                  <p className="font-starJedi">Taille: {props.starship?.length} m</p>
                  <p className="font-starJedi">Coût: {props.starship?.cost_in_credits}</p>
                </div>
                <div>
                  <p className="font-starJedi">Autonomie: {props.starship?.consumables}</p>
                  <p className="font-starJedi">vitesse maximum: {props.starship?.max_atmosphering_speed}</p>
                  <p className="font-starJedi">Classe de l'hyperdrive: {props.starship?.hyperdrive_rating}</p>
                  <p className="font-starJedi">Megalights maximum: {props.starship?.MGLT}</p>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">Pilotes</h1>
              <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
                {props.starship?.pilots?.map((pilot: Person, v: Key | null | undefined) => {
                  return (
                    <div key={v} className="hover:cursor-pointer border-2 border-tattooine p-2 rounded-2xl" onClick={() => navigate(`/people/${pilot?.url.split('/')[5]}`)}>
                      <p className="font-starJedi">Nom: {pilot.name}</p>
                      <p className="font-starJedi">Genre: {pilot.gender}</p>
                      <p className="font-starJedi">Date de naissance: {pilot.birth_year}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">Films</h1>
              <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
                {props.starship?.films?.map((film: Film, v: Key | null | undefined) => {
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
          </div>
        </>
      )}
    </div>
  )
}
export default StarshipDetailsCard
