import {Person} from "../../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";
import {DotSpinner} from "../../DotSpinner";

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
      <div className="flex flex-row justify-between items-center rounded">
        <h1 className="text-2xl font-starJediOutlined">Personnages</h1>
        <div className="flex flex-row items-center justify-center rounded-full w-1/12 text-center bg-tattooine font-starJedi">
          {props.loading ? <DotSpinner /> : (props.people?.length ?? 0)}
        </div>
      </div>
      {/*@ts-ignore*/}
      {props.people?.length && props.people.map((person: Person, p: Key | null | undefined) => {
        return (
          <div
            key={p} onClick={() => goToPage(person.url, 'people')}
            className="flex flex-row justify-between items-center p-2 my-3 rounded-xl hover:cursor-pointer border-2 border-tattooine">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-starJedi">{person.name.toLowerCase()}</p>
              <p className="font-starJedi">Naissance: {person.birth_year}</p>
            </div>
            <div>
              <p className="font-starJedi text-right">Taille: {person.height} cm</p>
              <p className="font-starJedi text-right">Poids: {person.mass} kg</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListPeople
