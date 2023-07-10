import {Starship} from "../../../data/types";

type Props = {
  starship: Starship
}

const StarshipDetailsCard = (props: Props) => {
  return (
    <>
      {JSON.stringify(props.starship)}
    </>
  )
}
export default StarshipDetailsCard
