import {useDispatch, useSelector} from "react-redux";
import {searchItem} from "../../actions/searchActions";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {PeopleDetailsCard} from "../../components/PeopleDetailsCard";
import {PlanetDetailsCard} from "../../components/PlanetDetailsCard";
import {FilmDetailsCard} from "../../components/FilmDetailsCard";
import {SpeciesDetailsCard} from "../../components/SpeciesDetailsCard";
import {VehicleDetailsCard} from "../../components/VehicleDetailsCard";
import {StarshipDetailsCard} from "../../components/StarshipDetailsCard";
import {Loader} from "../../components/Loader";
import {logoutUser} from "../../actions/authActions";
import {routes} from "../../constants/routes";

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
  const navigate = useNavigate()

  const getData = () => {
    const data = {id, category: props.category};
    // @ts-ignore
    dispatch(searchItem(data))
  }

  useEffect(() => {
    getData();
  }, [navigate])

  return (
    <>
      {error && <h2>{error}</h2>}
      {props.category === 'people' && !loading && itemDetails && <PeopleDetailsCard person={itemDetails}/>}
      {props.category === 'planets' && !loading && itemDetails && <PlanetDetailsCard planet={itemDetails}/>}
      {props.category === 'films' && !loading && itemDetails && <FilmDetailsCard film={itemDetails}/>}
      {props.category === 'species' && !loading && itemDetails && <SpeciesDetailsCard species={itemDetails}/>}
      {props.category === 'vehicles' && !loading && itemDetails && <VehicleDetailsCard vehicle={itemDetails}/>}
      {props.category === 'starships' && !loading && itemDetails && <StarshipDetailsCard starship={itemDetails}/>}

      {loading && <Loader/>}

      <div className="flex flex-row justify-center">
        <button className='button border-2 border-yellow mt-20 rounded mx-auto font-jedi text-yellow p-2'
          // @ts-ignore
                onClick={() => navigate(routes.search)}>
          Faire une autre recherche
        </button>
        <button className='button border-2 border-yellow mt-20 w-1/12 rounded mx-auto font-jedi text-yellow p-2'
          // @ts-ignore
                onClick={() => dispatch(logoutUser({}))}>
          M'enfuir
        </button>
      </div>
    </>
  )
}
export default ItemDetailsScreen
