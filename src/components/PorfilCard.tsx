import { Popover, PopoverTrigger } from "@radix-ui/react-popover"
import { Button } from "./ui/button"
import { useUser } from "@/store/useUserStore"
import { UserRoundIcon, LogOutIcon, LayoutDashboardIcon } from "lucide-react"
import { PopoverContent } from "./ui/popover"
import { Link } from "react-router-dom"

function PorfilCard() {
    const { user, loginOut } = useUser()
    return (
        <Popover>
            <PopoverTrigger>
                <Button variant='outline'><UserRoundIcon />{user?.username}</Button>
            </PopoverTrigger>
            <PopoverContent className="bg-neutral-800 flex justify-center  flex-col">
                <div className="text-neutral-500">{user?.username}</div>
                <div className="font-bold">{user?.name}</div>
                <div className="border-1 my-2 border-neutral-700"></div>
                <ul className="w-full">
                    <li>
                        <Link to="/dashboard/porfile"><Button variant='ghost' className="w-full justify-start"><UserRoundIcon />Porfile</Button></Link>
                    </li>
                    {
                        user?.isAdmin &&
                        <li>
                            <Link to="/dashboard/admin"><Button variant='ghost' className="w-full justify-start"><LayoutDashboardIcon />Administration</Button></Link>
                        </li>
                    }
                    <li>
                        <Button onClick={loginOut} className="w-full justify-start" variant='ghost'><LogOutIcon />Sing out</Button>
                    </li>
                </ul>
            </PopoverContent>
        </Popover>
    )
}

export default PorfilCard