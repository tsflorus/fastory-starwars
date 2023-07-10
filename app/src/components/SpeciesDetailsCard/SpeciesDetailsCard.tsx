import {Species} from "../../../data/types";

type Props = {
  species: Species
}

const SpeciesDetailsCard = (props: Props) => {
  return (
    <>
      {JSON.stringify(props.species)}
    </>
  )
}
export default SpeciesDetailsCard
