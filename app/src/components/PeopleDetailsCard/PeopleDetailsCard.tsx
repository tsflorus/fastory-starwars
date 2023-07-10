import {Person} from "../../../data/types";

type Props = {
  person: Person
}

const PeopleDetailsCard = (props: Props) => {
  return (
    <>
      {JSON.stringify(props.person)}
    </>
  )
}
export default PeopleDetailsCard
