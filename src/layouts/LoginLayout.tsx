import LoadingButton from "@/components/LoadingButton"
import LoginForm from "@/components/LoginForm"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useUser } from "@/store/useUserStore"

function LoginLayout() {
  const { loading } = useUser()
  return (
    <Card className="w-sm">
      <CardHeader>
        <CardTitle>My Breaking Bad Quote</CardTitle>
        <CardDescription>Authenticate to manage your profile</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter>
        {loading ?
          <LoadingButton className="w-full" value='Login' />
          :
          <Button className="w-full" form="loginForm" type="submit">Login</Button>
        }
      </CardFooter>
    </Card>
  )
}

export default LoginLayout