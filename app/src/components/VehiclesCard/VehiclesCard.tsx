import {Vehicle} from "../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";

const VehiclesCard = (props: { vehicles: Vehicle[]; }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-5">
      <h1 className="text-2xl font-starJediOutlined">Véhicules</h1>
      <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
        {props.vehicles?.map((vehicle: Vehicle, v: Key | null | undefined) => {
          return (
            <div key={v} className="hover:cursor-pointer border-2 border-luke-lightsaber p-2 rounded-2xl" onClick={() => navigate(`/vehicles/${vehicle?.url.split('/')[5]}`)}>
              <p className="font-starJedi">Nom: {vehicle.name}</p>
              <p className="font-starJedi">Modèle: {vehicle.model}</p>
              <p className="font-starJedi">Classe: {vehicle.vehicle_class}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VehiclesCard;
