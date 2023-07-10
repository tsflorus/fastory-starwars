import {Film, Person, Starship, Vehicle} from "../../../data/types";
import {useNavigate} from "react-router-dom";
import { Key } from "react";

type Props = {
  person: Person
}

// @ts-ignore
const PeopleDetailsCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="my-20">
      {props.person && (
        <>
          <h1 className="text-8xl font-starJediOutlined text-yellow text-center">{props.person?.name}</h1>
          <div className="w-8/12 mx-auto mt-10 bg-[#010101] border-yellow border-2 rounded-2xl p-5">
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">informations de base</h1>
              <div className="flex flex-row flex-wrap items-center justify-between">
                <div>
                  <p className="font-starJedi">Nom: {props.person?.name}</p>
                  <p className="font-starJedi">Genre: {props.person?.gender}</p>
                  <p className="font-starJedi">Date de naissance: {props.person?.birth_year}</p>
                </div>
                <div>
                  <p className="font-starJedi">Taille: {props.person?.height} cm</p>
                  <p className="font-starJedi">Poids: {props.person?.mass} kg</p>
                  <p className="font-starJedi hover:cursor-pointer text-gold"
                     onClick={() => navigate(`/planets/${props.person?.homeworld?.url.split('/')[5]}`)}>Planète: {props.person?.homeworld?.name}</p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between mt-5">
                <div>
                  <p className="font-starJedi">Cheveux: {props.person?.hair_color}</p>
                  <p className="font-starJedi">Peau: {props.person?.skin_color}</p>
                  <p className="font-starJedi">Yeux: {props.person?.eye_color}</p>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">Véhicules</h1>
              <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
                {props.person?.vehicles?.map((vehicle: Vehicle, v: Key | null | undefined) => {
                  return (
                    <div key={v} className="hover:cursor-pointer border-2 border-white p-2 rounded-2xl" onClick={() => navigate(`/vehicles/${vehicle?.url.split('/')[5]}`)}>
                      <p className="font-starJedi">Nom: {vehicle.name}</p>
                      <p className="font-starJedi">Modèle: {vehicle.model}</p>
                      <p className="font-starJedi">Classe: {vehicle.vehicle_class}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">Vaisseaux</h1>
              <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
                {props.person?.starships?.map((starship: Starship, v: Key | null | undefined) => {
                  return (
                    <div key={v} className="hover:cursor-pointer border-2 border-white p-2 rounded-2xl" onClick={() => navigate(`/starships/${starship?.url.split('/')[5]}`)}>
                      <p className="font-starJedi">Nom: {starship.name}</p>
                      <p className="font-starJedi">Modèle: {starship.model}</p>
                      <p className="font-starJedi">Classe: {starship.starship_class}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">Films</h1>
              <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
                {props.person?.films?.map((film: Film, v: Key | null | undefined) => {
                  return (
                    <div key={v} className="hover:cursor-pointer border-2 border-white p-2 rounded-2xl" onClick={() => navigate(`/films/${film?.url.split('/')[5]}`)}>
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
export default PeopleDetailsCard
