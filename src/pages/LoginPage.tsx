import { Button } from "@/components/ui/button"
import LoginLayout from "@/layouts/LoginLayout"
import { Link } from "react-router-dom"

function LoginPage() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className="text-center font-bold text-5xl m-10">Login</h1>
            <LoginLayout />
            <Link to="/signup">
                <Button className="w-full m-2" variant='link'>Don't have an account? Create one here</Button>
            </Link>
            <Link to="/">
                <Button className="w-full" variant='link'>Go Home</Button>
            </Link>
        </div>
    )
}

export default LoginPage