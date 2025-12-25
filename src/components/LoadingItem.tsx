import LoadingQuote from "./LoadingQuote"
import { Card, CardHeader } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

function LoadingItem() {
  return (
    <Card className="p-3 w-full max-w-xl">  
      <CardHeader className="flex"><Skeleton className="h-4 w-32 mt-2 rounded-none"/><Skeleton className="h-4 w-60 mt-2 rounded-none"/></CardHeader>
      <LoadingQuote />
    </Card>
  ) 
}

export default LoadingItem