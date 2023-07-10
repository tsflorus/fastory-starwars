import {Planet} from "../../../data/types";

type Props = {
  planet: Planet
}

const PlanetDetailsCard = (props: Props) => {
  return (
    <>
      {JSON.stringify(props.planet)}
    </>
  )
}
export default PlanetDetailsCard
