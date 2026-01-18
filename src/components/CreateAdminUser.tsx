import DialogComponent from './DialogComponent'
import { UserRoundPlus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editAdminSchema } from '@/validations/userValidations'
import { useQuote } from '@/store/useQuoteStore'
import { useAdmin } from '@/store/useAdminStore'
import AdminUserForm from './AdminUserForm'
import { useUser } from '@/store/useUserStore'


function CreateAdminUser() {
    const form = useForm({
        resolver: zodResolver(editAdminSchema),
        defaultValues: {
            isAdmin: false
        }
    })
    const {user} = useUser()
    const { quote } = useQuote()
    const { loading, createUser } = useAdmin()
    return (
        <div className='rounded-md bg-neutral-800'>
            <DialogComponent
                icon={<UserRoundPlus />}
                textButton='Add User'
                form='createUserAdmin'
                title='Create new user'
                description='loerm sdbkldshfgslkhgfksjhbfdlgksj'
                loading={loading}
                ok='Save'
            >
                <AdminUserForm
                    id='createUserAdmin'
                    form={form}
                    onSubmit={
                        form.handleSubmit((data) => {
                            if (quote == null) {
                                alert('Selecciona una Quote')
                            } else {
                                const newUser = {
                                    ...data,
                                    quote:quote
                                }
                                user&& createUser(newUser,user.token)
                            }
                        })
                    }
                />
            </DialogComponent>
        </div>
    )
}

export default CreateAdminUser