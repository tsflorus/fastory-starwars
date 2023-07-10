import {DotSpinner} from "../../DotSpinner";

type Props = {
  title: string
  loading: boolean
  itemsLength: number | null
}

const Header = (props: Props) => {
  let style = `flex flex-row items-center justify-center rounded-full w-1/12 text-center font-starJedi `

  switch (props.title.toLowerCase()) {
    case 'personnages':
      style = style.concat('bg-tattooine')
      break;
    case 'planètes':
      style = style.concat('bg-gold')
      break;
    case 'films':
      style = style.concat('bg-warp-speed')
      break;
    case 'espèces':
      style = style.concat('bg-chewy')
      break;
    case 'véhicules':
      style = style.concat('bg-luke-lightsaber')
      break;
    case 'vaisseaux':
      style = style.concat('bg-rebel-red')
      break;
  }
  return (
    <div className="flex flex-row justify-between items-center rounded">
      <h1 className="text-2xl font-starJediOutlined">{props.title}</h1>
      <div className={style}>
        {props.loading ? <DotSpinner /> : (props.itemsLength ?? 0)}
      </div>
    </div>
  )
}

export default Header
