import {FilmsCard} from "../FilmsCard";
import {PeopleCard} from "../PeopleCard";

// @ts-ignore
const VehicleDetailsCard = (props) => {
  return (
    <div className="my-20">
      {props.vehicle && (
        <>
          <h1 className="text-8xl font-starJediOutlined text-luke-lightsaber text-center">{props.vehicle?.name?.toLowerCase()}</h1>
          <div className="w-8/12 mx-auto mt-10 bg-[#010101] border-luke-lightsaber border-2 rounded-2xl p-5">
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">informations de base</h1>
              <div className="flex flex-row flex-wrap items-center justify-between">
                <div>
                  <p className="font-starJedi">Nom: {props.vehicle?.name?.toLowerCase()}</p>
                  <p className="font-starJedi">Modèle: {props.vehicle?.model}</p>
                  <p className="font-starJedi">Constructeur: {props.vehicle?.manufacturer}</p>
                </div>
                <div>
                  <p className="font-starJedi">Classe: {props.vehicle?.vehicle_class}</p>
                  <p className="font-starJedi">Équipage: {props.vehicle?.crew}</p>
                  <p className="font-starJedi">Passagers: {props.vehicle?.passengers}</p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between mt-5">
                <div>
                  <p className="font-starJedi">Capacité: {props.vehicle?.cargo_capacity}</p>
                  <p className="font-starJedi">Taille: {props.vehicle?.length}</p>
                  <p className="font-starJedi">Coût: {props.vehicle?.cost_in_credits}</p>
                </div>
                <div>
                  <p className="font-starJedi">Autonomie: {props.vehicle?.consumables}</p>
                  <p className="font-starJedi">vitesse maximum: {props.vehicle?.max_atmosphering_speed}</p>
                </div>
              </div>
            </div>
            <PeopleCard title="Pilotes" people={props.vehicle?.pilots} />
            <FilmsCard films={props.vehicle?.films} />
          </div>
        </>
      )}
    </div>
  )
}
export default VehicleDetailsCard
