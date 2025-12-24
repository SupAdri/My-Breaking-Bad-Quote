import { RefreshCcwIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"
import { useQuote } from "@/store/useQuoteStore"

function Loading() {
  return (
    <div>
      <div className="text-2xl italic flex justify-start">"<Skeleton className="mx-1 h-4 w-full mt-2 rounded-none" />"</div>
      <div className="flex flex-col items-end mr-2"><Skeleton className="h-4 w-[100px] m-2 rounded-none" /></div>
    </div>
  )
}

function QuoteText() {
  const { quote, getQuote } = useQuote()
  return (
    <>
      <div>
        <div>
          <div className="text-2xl italic flex justify-start">"{quote?.quote}"</div>
          <div className="text-gray-400 m-2 text-end">{quote?.author}</div>
        </div>
      </div>

      <Button variant='outline' onClick={getQuote}><RefreshCcwIcon />Cambiar frase</Button>
    </>
  )
}

function NoQuote() {
  const {getQuote} = useQuote()
  return (
    <div className="p-8 flex justify-center items-center">
      <Button variant='outline' onClick={getQuote}>Get Quote</Button>
    </div>
  )
}

// function Error() {//esto es por si ocurre algun error y la respuesta no llega pero no lo voy a utilizar pero tampoco lo voy a borar
//   return (
//     <div className="flex flex-col items-center space-y-2">
//       <div>Error al cargar la frase</div>
//       <Button variant='link'>Reintentar</Button>
//     </div>
//   )
// }

function QuoteComponet() {
  const { quote, loading } = useQuote()
  return (
    loading ?
      <Loading />
      :
      !quote ?
        <NoQuote />
        :
        <QuoteText />
  )
}

export default QuoteComponet