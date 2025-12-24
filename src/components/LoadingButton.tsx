import { Spinner } from "./ui/spinner"
import { Button } from "./ui/button"

type props = {
    className?:string
    value:String
}

function LoadingButton({className,value}:props) {
  return (
    <Button className={className} variant='outline'><Spinner/>{value}</Button>
  )
}

export default LoadingButton