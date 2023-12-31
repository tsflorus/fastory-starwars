import {Person} from "../../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";
import {Header} from "../Header";

type Props = {
  people: Array<Person | null>,
  loading: boolean,
}

const ListPeople = (props: Props) => {
  const navigate = useNavigate();

  const goToPage = async (url: string, category: string) => {
    let id = url.split('/')[5];
    await navigate(`/${category}/${id}`)
  }

  return (
    <div>
      <Header title='Personnages' loading={props.loading} itemsLength={props.people?.length} />
      {/*@ts-ignore*/}
      {props.people?.length ? props.people.map((person: Person, p: Key | null | undefined) => {
        return (
          <div
            key={p} onClick={() => goToPage(person.url, 'people')}
            className="flex md:flex-row flex-col md:justify-between justify-center items-center md:items-start p-2 my-3 rounded-xl hover:cursor-pointer border-2 border-tattooine">
            <div className="flex flex-col justify-center items-center md:items-start">
              <p className="text-xl font-starJedi">{person.name.toLowerCase()}</p>
              <p className="font-starJedi">Naissance: {person.birth_year}</p>
            </div>
            <div>
              <p className="font-starJedi md:text-right">Taille: {person.height} cm</p>
              <p className="font-starJedi md:text-right">Poids: {person.mass} kg</p>
            </div>
          </div>
        )
      }): ''}
    </div>
  )
}

export default ListPeople
