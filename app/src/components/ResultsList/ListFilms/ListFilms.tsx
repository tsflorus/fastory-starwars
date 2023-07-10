import {Film} from "../../../../data/types";
import {Key} from "react";
import {useNavigate} from "react-router-dom";
import {Header} from "../Header";

type Props = {
  films: Array<Film | null>,
  loading: boolean,
}

const ListFilms = (props: Props) => {
  const navigate = useNavigate();

  const goToPage = async (url: string, category: string) => {
    let id = url.split('/')[5];
    await navigate(`/${category}/${id}`)
  }

  return (
    <div>
      <Header title='Films' loading={props.loading} itemsLength={props.films?.length} />
      {/*@ts-ignore*/}
      {props.films?.length ? props.films.map((film: Film, p: Key | null | undefined) => {
        return (
          <div
            key={p} onClick={() => goToPage(film.url, 'films')}
            className="flex flex-row justify-between items-center p-2 my-3 rounded-xl hover:cursor-pointer border-2 border-warp-speed">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-starJedi">{film.title.toLowerCase()}</p>
              <p className="font-starJedi">Date de sortie: {film.release_date}</p>
            </div>
            <div>
              <p className="font-starJedi text-right">Producteurs: {film.producer.toLowerCase()}</p>
              <p className="font-starJedi text-right">Réalisateur: {film.director.toLowerCase()}</p>
            </div>
          </div>
        )
      }): ''}
    </div>
  )
}

export default ListFilms
