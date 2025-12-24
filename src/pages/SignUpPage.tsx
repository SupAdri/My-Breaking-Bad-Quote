import { Button } from "@/components/ui/button"
import SignUpLayout from "@/layouts/SignUpLayout"
import { Link } from "react-router-dom"

function SignUpPage() {
    return (
        <>
            <h1 className="text-center font-bold text-5xl m-10">SignUp</h1>
            <SignUpLayout />
            <Link to="/login">
                <Button className="w-full m-2" variant='link'>Already have an account? Log in here</Button>
            </Link>
            <Link to="/">
                <Button className="w-full" variant='link'>Go Home</Button>
            </Link>
        </>
    )
}

export default SignUpPage