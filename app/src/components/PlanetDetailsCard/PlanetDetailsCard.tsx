import {FilmsCard} from "../FilmsCard";
import {PeopleCard} from "../PeopleCard";

// @ts-ignore
const PlanetDetailsCard = (props) => {
  return (
    <div className="my-20">
      {props.planet && (
        <>
          <h1 className="md:text-8xl text-5xl font-starJediOutlined text-gold text-center">{props.planet?.name}</h1>
          <div className="md:w-8/12 w-10/12 mx-auto mt-10 bg-[#010101] border-gold border-2 rounded-2xl p-5">
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

            <PeopleCard title="Habitants" people={props.planet?.residents} />
            <FilmsCard films={props.planet?.films} />
          </div>
        </>
      )}
    </div>
  )
}
export default PlanetDetailsCard
