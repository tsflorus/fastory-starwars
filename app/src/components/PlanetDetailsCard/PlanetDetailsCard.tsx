import {Film, Person, Planet, Starship, Vehicle} from "../../../data/types";
import {useNavigate} from "react-router-dom";
import {Key} from "react";

type Props = {
  planet: Planet
}
// @ts-ignore
const PlanetDetailsCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="my-20">
      {props.planet && (
        <>
          <h1 className="text-8xl font-starJediOutlined text-yellow text-center">{props.planet?.name}</h1>
          <div className="w-8/12 mx-auto mt-10 bg-[#010101] border-yellow border-2 rounded-2xl p-5">
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">informations de base</h1>
              <div className="flex flex-row flex-wrap items-center justify-between">
                <div>
                  <p className="font-starJedi">Nom: {props.planet?.name}</p>
                  <p className="font-starJedi">Population: {props.planet?.population}</p>
                  <p className="font-starJedi">Climat: {props.planet?.climate}</p>
                  <p className="font-starJedi">Terrain: {props.planet?.terrain}</p>
                  <p className="font-starJedi">Pourcentage d'eau: {props.planet?.surface_water}</p>
                </div>
                <div>
                  <p className="font-starJedi">Période de rotation: {props.planet?.rotation_period}</p>
                  <p className="font-starJedi">Période orbitale: {props.planet?.orbital_period}</p>
                  <p className="font-starJedi">Diamètre: {props.planet?.diameter}</p>
                  <p className="font-starJedi">Gravité: {props.planet?.gravity}</p>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">Habitants</h1>
              <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
                {props.planet?.residents?.map((resident: Person, p: Key | null | undefined) => {
                  return (
                    <div key={p} className="hover:cursor-pointer border-2 border-white p-2 rounded-2xl"
                         onClick={() => navigate(`/people/${resident?.url.split('/')[5]}`)}>
                      <p className="font-starJedi">Nom: {resident.name.toLowerCase()}</p>
                      <p className="font-starJedi">Genre: {resident.gender}</p>
                      <p className="font-starJedi">Date de naissance: {resident.birth_year}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">Films</h1>
              <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
                {props.planet?.films?.map((film: Film, v: Key | null | undefined) => {
                  return (
                    <div key={v} className="hover:cursor-pointer border-2 border-white p-2 rounded-2xl"
                         onClick={() => navigate(`/films/${film?.url.split('/')[5]}`)}>
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
export default PlanetDetailsCard
