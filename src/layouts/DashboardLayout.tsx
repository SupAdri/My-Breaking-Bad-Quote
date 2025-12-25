import { UserRoundIcon, LogOutIcon, LayoutDashboardIcon, HomeIcon } from "lucide-react"
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, SidebarHeader, SidebarGroupLabel, SidebarFooter, } from "@/components/ui/sidebar"
import type React from "react"
import { Link } from "react-router-dom"
import { useUser } from "@/store/useUserStore"
import { Button } from "@/components/ui/button"

const items = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon,
    },
    {
        id: 'porfile',
        title: "Profil",
        url: "/dashboard/porfile",
        icon: UserRoundIcon,
    },
    {
        id: "admin",
        title: "Administration",
        url: "/dashboard/admin",
        icon: LayoutDashboardIcon,
    },
]

type Props = {
    section?: string
    children?: React.ReactNode
}

function DashboardLayout({ section, children }: Props) {
    const { user, loginOut } = useUser()
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <h1 className="font-bold">My Breaking Bad Quote</h1>
                    <div className="font-bold text-xl">{user?.name}</div>
                    <div className="text-neutral-500">{user?.username}</div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={section == item.id}>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <Link onClick={loginOut} to='/'><Button className="w-full"><LogOutIcon/>Sing out</Button></Link>
                </SidebarFooter>
            </Sidebar>
            <main className="w-full">
                <SidebarTrigger className="p-5 bg-black border-neutral-700 border-1  m-2"/>
                {children}
            </main>
        </SidebarProvider >

    )
}

export default DashboardLayout