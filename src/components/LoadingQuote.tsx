import { Skeleton } from "./ui/skeleton"

function LoadingQuote() {
  return (
     <div>
      <div className="text-2xl italic flex justify-start">"<Skeleton className="mx-1 h-4 w-full mt-2 rounded-none" />"</div>
      <div className="flex flex-col items-end mr-2"><Skeleton className="h-4 w-[100px] m-2 rounded-none" /></div>
    </div>
  )
}

export default LoadingQuote