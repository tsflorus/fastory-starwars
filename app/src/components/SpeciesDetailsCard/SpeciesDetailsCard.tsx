import {useNavigate} from "react-router-dom";
import {FilmsCard} from "../FilmsCard";
import {PeopleCard} from "../PeopleCard";

// @ts-ignore
const SpeciesDetailsCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="my-20">
      {props.species && (
        <>
          <h1 className="md:text-8xl text-5xl font-starJediOutlined text-chewy text-center">{props.species?.name?.toLowerCase()}</h1>
          <div className="md:w-8/12 w-10/12 mx-auto mt-10 bg-[#010101] border-chewy border-2 rounded-2xl p-5">
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">informations de base</h1>
              <div className="flex flex-row flex-wrap items-center justify-between">
                <div>
                  <p className="font-starJedi">Nom: {props.species?.name?.toLowerCase()}</p>
                  <p className="font-starJedi">Designation: {props.species?.designation}</p>
                  <p className="font-starJedi">Classification: {props.species?.classification}</p>
                </div>
                <div>
                  <p className="font-starJedi">Langue: {props.species?.language}</p>
                  <p className="font-starJedi hover:cursor-pointer text-gold"
                     onClick={() => navigate(`/planets/${props.species?.homeworld?.url.split('/')[5]}`)}>Planète: {props.species?.homeworld?.name}</p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between mt-5">
                <div>
                  <p className="font-starJedi">Taille moyenne: {props.species?.average_height} cm</p>
                  <p className="font-starJedi">Durée de vie moyenne: {props.species?.average_lifespan} ans</p>
                </div>
                <div>
                  <p className="font-starJedi">Yeux: {props.species?.eye_colors}</p>
                  <p className="font-starJedi">Cheveux: {props.species?.hair_colors}</p>
                  <p className="font-starJedi">Peau: {props.species?.skin_colors}</p>
                </div>
              </div>
            </div>
            <PeopleCard title="Personnages" people={props.species?.people} />
            <FilmsCard films={props.species?.films} />
          </div>
        </>
      )}
    </div>
  )
}
export default SpeciesDetailsCard
