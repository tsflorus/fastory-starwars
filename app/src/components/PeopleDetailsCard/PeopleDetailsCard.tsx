import {useNavigate} from "react-router-dom";
import {VehiclesCard} from "../VehiclesCard";
import {StarshipsCard} from "../StarshipsCard";
import {FilmsCard} from "../FilmsCard";

// @ts-ignore
const PeopleDetailsCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="my-20">
      {props.person && (
        <>
          <h1 className="md:text-8xl text-5xl font-starJediOutlined text-tattooine text-center">{props.person?.name?.toLowerCase()}</h1>
          <div className="md:w-8/12 w-10/12 mx-auto mt-10 bg-[#010101] border-tattooine border-2 rounded-2xl p-5">
            <div className="mb-5">
              <h1 className="text-2xl font-starJediOutlined">informations de base</h1>
              <div className="flex flex-row flex-wrap items-center justify-between">
                <div>
                  <p className="font-starJedi">Nom: {props.person?.name?.toLowerCase()}</p>
                  <p className="font-starJedi">Genre: {props.person?.gender}</p>
                  <p className="font-starJedi">Date de naissance: {props.person?.birth_year}</p>
                </div>
                <div>
                  <p className="font-starJedi">Taille: {props.person?.height} cm</p>
                  <p className="font-starJedi">Poids: {props.person?.mass} kg</p>
                  <p className="font-starJedi hover:cursor-pointer text-gold"
                     onClick={() => navigate(`/planets/${props.person?.homeworld?.url.split('/')[5]}`)}>Planète: {props.person?.homeworld?.name}</p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-between mt-5">
                <div>
                  <p className="font-starJedi">Cheveux: {props.person?.hair_color}</p>
                  <p className="font-starJedi">Peau: {props.person?.skin_color}</p>
                  <p className="font-starJedi">Yeux: {props.person?.eye_color}</p>
                </div>
              </div>
            </div>
            <VehiclesCard vehicles={props.person?.vehicles} />
            <StarshipsCard starships={props.person?.starships} />
            <FilmsCard films={props.person?.films} />
          </div>
        </>
      )}
    </div>
  )
}
export default PeopleDetailsCard
