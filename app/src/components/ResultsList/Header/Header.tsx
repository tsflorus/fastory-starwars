import {DotSpinner} from "../../DotSpinner";

type Props = {
  title: string
  loading: boolean
  itemsLength: number | null
  color: string
}

const Header = (props: Props) => {
  return (
    <div className="flex flex-row justify-between items-center rounded">
      <h1 className="text-2xl font-starJediOutlined">{props.title}</h1>
      <div className={`flex flex-row items-center justify-center rounded-full w-1/12 text-center bg-${props.color} font-starJedi`}>
        {props.loading ? <DotSpinner /> : (props.itemsLength ?? 0)}
      </div>
    </div>
  )
}

export default Header
