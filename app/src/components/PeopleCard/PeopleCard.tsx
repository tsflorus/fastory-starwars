import {Person} from "../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";

const PeopleCard = (props: {
  title: string;
  people: Person[]; }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-5">
      <h1 className="text-2xl font-starJediOutlined">{props.title}</h1>
      <div className="flex flex-row flex-wrap items-center gap-10 mt-2">
        {props.people?.map((person: Person, v: Key | null | undefined) => {
          return (
            <div key={v} className="hover:cursor-pointer border-2 border-tattooine p-2 rounded-2xl" onClick={() => navigate(`/people/${person?.url.split('/')[5]}`)}>
              <p className="font-starJedi">Nom: {person.name}</p>
              <p className="font-starJedi">Genre: {person.gender}</p>
              <p className="font-starJedi">Date de naissance: {person.birth_year}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PeopleCard;
