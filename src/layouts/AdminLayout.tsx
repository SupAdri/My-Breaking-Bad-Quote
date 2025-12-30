import CreateAdminUser from "@/components/CreateAdminUser"
import ItemPost from "@/components/ItemPost"
import LoadingItem from "@/components/LoadingItem"
import { useAdmin } from "@/store/useAdminStore"
import { useUser } from "@/store/useUserStore"
import { useEffect } from "react"

function AdminLayout() {
  const { user } = useUser()
  const { users, getUsers } = useAdmin()
  useEffect(() => {
    user && getUsers(user.token)
  }, [])
  return (
    <div className="p-8 flex flex-col space-y-5 items-center">
      <h1 className="text-3xl font-bold border-b-2 border-white border-dashed w-fit">Admin</h1>
      <div className="sticky top-2 z-30 flex justify-end w-full">
        <CreateAdminUser />
      </div>
      {
        users ?
          users.map((item, i) => (<ItemPost key={i} post={item} isAdmin={true} />))
          :
          Array.from({ length: 4 }).map(() => <LoadingItem />)
      }
    </div>
  )
}

export default AdminLayout