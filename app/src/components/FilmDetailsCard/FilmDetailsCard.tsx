import {VehiclesCard} from "../VehiclesCard";
import {StarshipsCard} from "../StarshipsCard";
import {PeopleCard} from "../PeopleCard";
import {PlanetsCard} from "../PlanetsCard";

// @ts-ignore
const FilmDetailsCard = (props) => {
  return (
    <div className="my-20">
      {props.film && (
        <>
          <h1
            className="md:text-8xl text-5xl font-starJediOutlined text-warp-speed text-center">{props.film?.title?.toLowerCase()}</h1>
          <div className="md:w-8/12 w-10/12 mx-auto mt-10 bg-[#010101] border-warp-speed border-2 rounded-2xl p-5">
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
            <PlanetsCard planets={props.fil?.characters} />
            <PeopleCard title="Personnages" people={props.film?.characters} />
            <VehiclesCard vehicles={props.film?.vehicles} />
            <StarshipsCard starships={props.film?.starships} />
          </div>
        </>
      )}
    </div>
  )
}

export default FilmDetailsCard
