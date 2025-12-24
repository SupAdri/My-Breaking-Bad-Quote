import SignUpForm from "@/components/SignUpForm"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useCreateUser } from "@/store/useUserStore"
import { ArrowLeftIcon } from "lucide-react"
import { useQuote } from "@/store/useQuoteStore"
import LoadingButton from "@/components/LoadingButton"
import QuoteComponet from "@/components/QuoteComponet"
import { useUser } from "@/store/useUserStore"


function SignUpLayout() {

  const { user, loading, deleteUser } = useCreateUser()
  const loaginQuote = useQuote().loading
  const quote = useQuote().quote
  const loadingSignUp = useUser().loading
  const signUp = useUser().signUp

  return (
    <Card className="w-sm">
      <CardHeader>
        <CardTitle>My Breaking Bad Quote</CardTitle>
        <CardDescription>Create an account to get a phrase</CardDescription>
      </CardHeader>
      <CardContent>
        {
          user ?
            <div>
              <Button onClick={deleteUser} variant='link' size='sinMargen' ><ArrowLeftIcon />Back</Button>
              <div className="font-bold text-2xl">Tu frase es:</div>
              <QuoteComponet />
            </div>
            :
            <SignUpForm />
        }
      </CardContent>
      <CardFooter>
        {
          user ?
            loaginQuote? <></> : !quote? <></> : loadingSignUp ? <LoadingButton className="w-full" value="Save" /> : <Button className="w-full" onClick={()=>signUp(user,quote)}>Save</Button>
            :
            loading ? <LoadingButton className="w-full" value='Get Quote' /> : <Button className="w-full" form="loginForm" type="submit">Get Quote</Button>
        }
      </CardFooter>
    </Card>
  )
}

export default SignUpLayout