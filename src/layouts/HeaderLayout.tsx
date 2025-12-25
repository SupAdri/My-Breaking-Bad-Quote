import { useUser } from "@/store/useUserStore"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import PorfilCard from "@/components/PorfilCard"

function HeaderLayout() {
    const { isAuthenticate } = useUser()
    return (
        <header className="z-10 sticky top-0 flex items-center justify-between bg-neutral-900 p-3 px-5">
            <h1 className="font-bold">My Breaking Bad Quote</h1>
            {
                isAuthenticate ?
                    <PorfilCard />
                    :
                    <div className="space-x-2">
                        <Link to="/login"><Button variant='outline'>Login</Button></Link>
                        <Link to="/signup"><Button>Sign Up</Button></Link>
                    </div>

            }
        </header>
    )
}

export default HeaderLayout