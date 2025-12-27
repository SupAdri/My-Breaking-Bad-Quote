import ChangePassword from "@/components/ChangePassword"
import EditPorfile from "@/components/EditPorfile"
import LoadingButton from "@/components/LoadingButton"
import QuoteComponet from "@/components/QuoteComponet"
import { Button } from "@/components/ui/button"
import { useQuote } from "@/store/useQuoteStore"
import { useUser } from "@/store/useUserStore"
import { useEffect } from "react"

function PorfileLayout() {
    const { user, edit, setLoading, loading } = useUser()
    const { quote, setQuote } = useQuote()
    const loadingQuote = useQuote().loading
    useEffect(() => {
        user && setQuote(user.quote)
        setLoading(false)
    }, [])
    return (
        <div className="w-full flex flex-col justify-center items-center p-8">
            <h1 className="text-3xl font-bold border-b-2 border-white border-dashed">Porfile</h1>
            <h2 className="text-4xl mt-5 text-center">{user?.name}</h2>
            <div className="text-neutral-500 mb-5">{user?.username}</div>
            <div className="space-y-2 flex flex-col items-center">
                <EditPorfile />
                <ChangePassword />
            </div>
            <div className="p-3 w-full max-w-xl">
                <QuoteComponet />
                <div className="mt-4">
                    {
                        (quote?.quote == user?.quote.quote || loadingQuote) ?
                            <></>
                            :
                            loading ?
                                <LoadingButton value="Save" />
                                :
                                <Button onClick={() => {
                                    edit(null, quote)
                                }}>Save</Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default PorfileLayout