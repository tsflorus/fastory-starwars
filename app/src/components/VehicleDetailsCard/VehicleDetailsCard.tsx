import {Vehicle} from "../../../data/types";

type Props = {
  vehicle: Vehicle
}

const VehicleDetailsCard = (props: Props) => {
  return (
    <>
      {JSON.stringify(props.vehicle)}
    </>
  )
}
export default VehicleDetailsCard
