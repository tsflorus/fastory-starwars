import {Film, Person, Planet, Starship, Vehicle} from "../../../data/types";
import {useNavigate} from "react-router-dom";
import {Key} from "react";

type Props = {
  film: Film
}

// @ts-ignore
const FilmDetailsCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="my-20">
      {props.film && (
        <>
          <h1
            className="text-8xl font-starJediOutlined text-warp-speed text-center">{props.film?.title?.toLowerCase()}</h1>
          <div className="w-8/12 mx-auto mt-10 bg-[#010101] border-warp-speed border-2 rounded-2xl p-5">
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">informations de base</h1>
              <div className="flex flex-row flex-wrap items-center justify-between">
                <div>
                  <p className="font-starJedi">Nom: {props.film?.title?.toLowerCase()}</p>
                  <p className="font-starJedi">Épisode n°: {props.film?.episode_id}</p>
                  <p className="font-starJedi">Date de sortie: {props.film?.release_date}</p>
                </div>
                <div>
                  <p className="font-starJedi">Réalisateur: {props.film?.director}</p>
                  <p className="font-starJedi">Producteurs: {props.film?.producer}</p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between mt-5">
                <p className="font-starJedi">Titre d'ouverture:</p>
                <p className="font-starJedi">{props.film?.opening_crawl?.toLowerCase()}</p>
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">Planets</h1>
              <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
                {props.film?.planets?.map((planet: Planet, v: Key | null | undefined) => {
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
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">Personnages</h1>
              <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
                {props.film?.characters?.map((character: Person, v: Key | null | undefined) => {
                  return (
                    <div key={v} className="hover:cursor-pointer border-2 border-tattooine p-2 rounded-2xl"
                         onClick={() => navigate(`/people/${character?.url.split('/')[5]}`)}>
                      <p className="font-starJedi">Nom: {character.name}</p>
                      <p className="font-starJedi">Genre: {character.gender}</p>
                      <p className="font-starJedi">Date de naissance: {character.birth_year}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">Véhicules</h1>
              <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
                {props.film?.vehicles?.map((vehicle: Vehicle, v: Key | null | undefined) => {
                  return (
                    <div key={v} className="hover:cursor-pointer border-2 border-luke-lightsaber p-2 rounded-2xl"
                         onClick={() => navigate(`/vehicles/${vehicle?.url.split('/')[5]}`)}>
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
                {props.film?.starships?.map((starship: Starship, v: Key | null | undefined) => {
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
          </div>
        </>
      )}
    </div>
  )
}

export default FilmDetailsCard
