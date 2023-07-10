import {useDispatch, useSelector} from "react-redux";
import {searchInCategory} from "../../actions/searchActions";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {PeopleDetailsCard} from "../../components/PeopleDetailsCard";
import {PlanetDetailsCard} from "../../components/PlanetDetailsCard";
import {FilmDetailsCard} from "../../components/FilmDetailsCard";

type Props = {
  category: string
}

const ItemDetailsScreen = (props: Props) => {
  const {loading, itemDetails, error} = useSelector(
    // @ts-ignore
    (state) => state.search
  );
  const {id} = useParams();
  const dispatch = useDispatch()

  const getData = () => {
    const data = {id, category: props.category};
    // @ts-ignore
    dispatch(searchInCategory(data))
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      {error && <h2>{error}</h2>}
      <h1 className="font-jedi-outlined">{props.category} details</h1>

      {props.category === 'people' && itemDetails && <PeopleDetailsCard person={itemDetails} />}
      {props.category === 'planets' && itemDetails && <PlanetDetailsCard planet={itemDetails} />}
      {props.category === 'films' && itemDetails && <FilmDetailsCard film={itemDetails} />}

      {loading && <h1>Loading</h1>}
    </>
  )
}
export default ItemDetailsScreen
