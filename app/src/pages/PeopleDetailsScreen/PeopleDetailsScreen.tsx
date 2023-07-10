import {useDispatch, useSelector} from "react-redux";
import {FieldValues, useForm} from "react-hook-form";
import {searchInCategory, searchName} from "../../actions/searchActions";
import {Film, Person, Planet, Species, Starship, Vehicle} from "../../../data/types";
import {Key, useEffect} from "react";
import {useParams} from "react-router-dom";

const PeopleDetailsScreen = () => {
  const {loading, itemDetails, error} = useSelector(
    // @ts-ignore
    (state) => state.search
  );
  const {id} = useParams();
  const dispatch = useDispatch()


  const getData = (category: string) => {
    const data = {id, category};
    // @ts-ignore
    dispatch(searchInCategory(data))
  }

  useEffect(() => {
    getData('people');
  }, [])

  return (
    <>
      {error && <h2>{error}</h2>}
      <h1 className="font-jedi-outlined">People details</h1>

      {JSON.stringify(itemDetails)}

      {loading && <h1>Loading</h1>}
    </>
  )
}
export default PeopleDetailsScreen
