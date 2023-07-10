import {Vehicle} from "../../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";
import {DotSpinner} from "../../DotSpinner";

type Props = {
  vehicles: Array<Vehicle | null>,
  loading: boolean,
}

const ListVehicles = (props: Props) => {
  const navigate = useNavigate();

  const goToPage = async (url: string, category: string) => {
    let id = url.split('/')[5];
    await navigate(`/${category}/${id}`)
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center rounded">
        <h1 className="text-2xl font-starJediOutlined">Véhicules</h1>
        <div className="flex flex-row items-center justify-center rounded-full w-1/12 text-center bg-luke-lightsaber font-starJedi">
          {props.loading ? <DotSpinner /> : (props.vehicles?.length ?? 0)}
        </div>
      </div>
      {/*@ts-ignore*/}
      {props.vehicles?.length && props.vehicles.map((vehicle: Vehicle, p: Key | null | undefined) => {
        return (
          <div
            key={p} onClick={() => goToPage(vehicle.url, 'vehicles')}
            className="flex flex-row justify-between items-center p-2 my-3 rounded-xl hover:cursor-pointer border-2 border-luke-lightsaber">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-starJedi">{vehicle.name.toLowerCase()}</p>
              <p className="font-starJedi">Classe: {vehicle.vehicle_class}</p>
            </div>
            <div>
              <p className="font-starJedi text-right">Modèle: {vehicle.model.toLowerCase()}</p>
              <p className="font-starJedi text-right">Équipage: {vehicle.crew.toLowerCase()}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListVehicles
