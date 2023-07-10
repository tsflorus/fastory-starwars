import {Film, Person, Species} from "../../../data/types";
import {useNavigate} from "react-router-dom";
import {Key} from "react";

type Props = {
  species: Species
}

// @ts-ignore
const SpeciesDetailsCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="my-20">
      {props.species && (
        <>
          <h1 className="text-8xl font-starJediOutlined text-chewy text-center">{props.species?.name?.toLowerCase()}</h1>
          <div className="w-8/12 mx-auto mt-10 bg-[#010101] border-chewy border-2 rounded-2xl p-5">
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">informations de base</h1>
              <div className="flex flex-row flex-wrap items-center justify-between">
                <div>
                  <p className="font-starJedi">Nom: {props.species?.name?.toLowerCase()}</p>
                  <p className="font-starJedi">Designation: {props.species?.designation}</p>
                  <p className="font-starJedi">Classification: {props.species?.classification}</p>
                </div>
                <div>
                  <p className="font-starJedi">Langue: {props.species?.language}</p>
                  <p className="font-starJedi hover:cursor-pointer text-gold"
                     onClick={() => navigate(`/planets/${props.species?.homeworld?.url.split('/')[5]}`)}>Planète: {props.species?.homeworld?.name}</p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between mt-5">
                <div>
                  <p className="font-starJedi">Taille moyenne: {props.species?.average_height} cm</p>
                  <p className="font-starJedi">Durée de vie moyenne: {props.species?.average_lifespan} ans</p>
                </div>
                <div>
                  <p className="font-starJedi">Yeux: {props.species?.eye_colors}</p>
                  <p className="font-starJedi">Cheveux: {props.species?.hair_colors}</p>
                  <p className="font-starJedi">Peau: {props.species?.skin_colors}</p>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">Personnages</h1>
              <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
                {props.species?.people?.map((person: Person, v: Key | null | undefined) => {
                  return (
                    <div key={v} className="hover:cursor-pointer border-2 border-tattooine p-2 rounded-2xl" onClick={() => navigate(`/people/${person?.url.split('/')[5]}`)}>
                      <p className="font-starJedi">Nom: {person.name}</p>
                      <p className="font-starJedi">Genre: {person.gender}</p>
                      <p className="font-starJedi">Date de naissance: {person.birth_year}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">Films</h1>
              <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
                {props.species?.films?.map((film: Film, v: Key | null | undefined) => {
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
export default SpeciesDetailsCard
