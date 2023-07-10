import {useDispatch, useSelector} from "react-redux";
import {searchName} from "../../actions/searchActions";
import {useEffect, useState} from "react";
import human from '../../assets/img/human.png'
import wookie from '../../assets/img/wookie.png'
import {ResultsList} from "../../components/ResultsList";
import {logoutUser} from "../../actions/authActions";

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  const {loading, searchResult, error} = useSelector(
    // @ts-ignore
    (state) => state.search
  );
  const dispatch = useDispatch();

  const handleInputChange = (event: { target: { value: string; }; }) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchValue, filter, 500]);

  useEffect(() => {
    if (debouncedSearchValue.length > 0) {
      // @ts-ignore
      dispatch(searchName({nameToSearch: debouncedSearchValue, filter: filter.length ? filter : null}))
    }
  }, [debouncedSearchValue, filter])

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 w-8/12 mx-auto">
        {error && <h2>{error}</h2>}
        <h1 className="font-jedi-outlined text-4xl text-yellow text-center">Rechercher dans la base de l'empire</h1>
        <div className="flex flex-row items-center justify-center w-8/12">
          <input
            placeholder='Nom à rechercher'
            type='nameToSearch'
            className='border-white bg-black p-2 font-starJedi rounded w-10/12 text-center my-10'
            style={{borderWidth: 1}}
            value={searchValue}
            onChange={handleInputChange}
            required
          />
          <select id="countries" className="bg-black border-2 border-yellow w-2/12 mx-3 p-2 rounded" value={filter}
                  onChange={(e) => setFilter(e.target.value)}>
            <option value="">Tout</option>
            <option value="people">Personnages</option>
            <option value="planets">Planètes</option>
            <option value="films">Films</option>
            <option value="species">Espèces</option>
            <option value="vehicles">Véhicules</option>
            <option value="starships">Vaisseaux</option>
          </select>

        </div>

        <ResultsList results={searchResult} loading={loading}/>
      </div>
      <div className="flex flex-row justify-center">
        <button className='button border-2 border-yellow mt-20 w-1/12 rounded mx-auto font-jedi text-yellow p-2'
          // @ts-ignore
                onClick={() => dispatch(logoutUser({}))}>
          M'enfuir
        </button>
      </div>
    </>
  )
}
export default SearchScreen
