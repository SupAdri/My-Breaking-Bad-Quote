import { Edit3Icon, Trash2Icon } from "lucide-react"
import DialogComponent from "./DialogComponent"
import type { User } from "@/services/userService"
import AdminUserForm from "./AdminUserForm"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { editAdminSchema } from "@/validations/userValidations"
import { useEffect } from "react"
import { useQuote } from "@/store/useQuoteStore"
import { useAdmin } from "@/store/useAdminStore"
import { useUser } from "@/store/useUserStore"

type Props = {
    user: Partial<User>
}

function OptionPostAdmin({ user }: Props) {
    const { editUser, loading, deleteUsers } = useAdmin()
    const UserStore = useUser()
    const { quote, setQuote } = useQuote()
    const form = useForm({
        resolver: zodResolver(editAdminSchema),
        defaultValues: {
            name: user.name ? user.name : '',
            username: user.username ? user.username : '',
            isAdmin: user.isAdmin ? user.isAdmin : false,
            password: user.password ? user.password : ''
        }
    })
    useEffect(() => {
        user.quote && setQuote(user.quote)
    }, [])
    return (
        <div className="w-full flex justify-between items-center mb-2">
            <div className="text-neutral-400 truncate">Token: {user.token}</div>
            <div className="flex space-x-2">
                <DialogComponent
                    title="Edit User"
                    description={`token: ${user.token}`}
                    icon={<Edit3Icon />}
                    textButton="Edit"
                    form="editAdminUser"
                    ok="Save"
                    loading={loading}
                >
                    <AdminUserForm id="editAdminUser" form={form}
                        onSubmit={form.handleSubmit((data) => {
                            if (quote != null) {
                                const edit = {
                                    ...user,
                                    ...data,
                                    quote: quote
                                }
                                UserStore.user && editUser(edit, UserStore.user.token)
                            }

                        })}
                    />
                </DialogComponent>
                <DialogComponent
                    title={`Delete | ${user.username}`}
                    description="Seguro de eliminar este usuario?"
                    icon={<Trash2Icon />}
                    textButton="Delete"
                    buttonVariant='destructive'
                    okVariant='destructive'
                    ok="DELETE"
                    okOnClick={() => {
                       UserStore.user && deleteUsers(user,UserStore.user.token)
                    }}
                >

                </DialogComponent>
            </div>
        </div>
    )
}

export default OptionPostAdmin