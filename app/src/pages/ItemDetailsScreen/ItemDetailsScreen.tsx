import {useDispatch, useSelector} from "react-redux";
import {searchInCategory} from "../../actions/searchActions";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {PeopleDetailsCard} from "../../components/PeopleDetailsCard";
import {PlanetDetailsCard} from "../../components/PlanetDetailsCard";
import {FilmDetailsCard} from "../../components/FilmDetailsCard";
import {SpeciesDetailsCard} from "../../components/SpeciesDetailsCard";
import {VehicleDetailsCard} from "../../components/VehicleDetailsCard";
import {StarshipDetailsCard} from "../../components/StarshipDetailsCard";
import {Loader} from "../../components/Loader";

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

      {props.category === 'people' && !loading && itemDetails && <PeopleDetailsCard person={itemDetails} />}
      {props.category === 'planets' && !loading && itemDetails && <PlanetDetailsCard planet={itemDetails} />}
      {props.category === 'films' && !loading && itemDetails && <FilmDetailsCard film={itemDetails} />}
      {props.category === 'species' && !loading && itemDetails && <SpeciesDetailsCard species={itemDetails} />}
      {props.category === 'vehicles' && !loading && itemDetails && <VehicleDetailsCard vehicle={itemDetails} />}
      {props.category === 'starships' && !loading && itemDetails && <StarshipDetailsCard starship={itemDetails} />}

      {loading && <Loader />}
    </>
  )
}
export default ItemDetailsScreen
