import {Film} from "../../../data/types";

type Props = {
  film: Film
}

const FilmDetailsCard = (props: Props) => {
  return (
    <>
      {JSON.stringify(props.film)}
    </>
  )
}
export default FilmDetailsCard
